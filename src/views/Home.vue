<script>
    import { Toast } from "mint-ui";
    export default {
        data() {
            return {
                lunbotuList: [] // 保存轮播图的数组
            };
        },
        created() {
            this.getLunbotu();
        },
        methods: {
            getLunbotu() {
                // 获取轮播图数据的方法
                axios.get("/api/getlunbo").then({data} => {
                    if (data.status === 0) {
                        // 成功了
                        this.lunbotuList = data.message;
                        //console.log(this.lunbotuList)
                    } else {
                        // 失败的
                        Toast("加载轮播图失败。。。");
                    }
                });
            }
        }
    };
</script>
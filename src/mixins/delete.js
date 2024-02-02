
import { ElNotification } from "element-plus";

const handleDelete = (id, massive) => {
    return massive.filter(item => item.id !== id)
}
export {handleDelete}
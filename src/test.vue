<ListToolBar title="頁面管理" 
  :is-in-edit-mode="editMode.isInEditMode"
  has-search-box v-model:search-text="pageData.search" 
  has-creat-btn @create:new="create">
</ListToolBar>

想改成類似這樣(預期)
<ListToolBar title="頁面管理">
  <ListToolBarSearch v-model:search-text="pageData.search"></ListToolBarSearch>
  <ListToolBarBtn :disabled="editMode.isInEditMode" @click="create"></ListToolBarBtn>
</ListToolBar>



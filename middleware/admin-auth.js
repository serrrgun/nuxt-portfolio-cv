
export default function({store, redirect}) {
  if (!store.getters['auth/isAuthnticated']) {
    redirect('/admin/login?message=login')
  }
}

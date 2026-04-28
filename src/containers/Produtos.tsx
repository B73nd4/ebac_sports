import Produto from '../components/Produto'
import * as S from './styles'
import { useGetProdutosQuery } from '../services/api'

const ProdutosComponent = () => {
  const { data: produtos, isLoading, isError } = useGetProdutosQuery()

  if (isLoading) {
    return <div>Carregando produtos...</div>
  }

  if (isError) {
    return <div>Erro ao carregar produtos</div>
  }

  return (
    <S.Produtos>
      {produtos?.map((produto) => (
        <Produto key={produto.id} produto={produto} />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent

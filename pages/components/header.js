import Link from "next/link";

export default function Header(){
    return(
        <nav class="navbar border">
        <span class="btn btn-success">Biblioteca Digital de Pesquisas - IFMS</span>
        <ul class="navbar-nav me-auto">
          <li class="nav-item btn btn-success">Página Inicial</li>
          <li class="nav-item">
        <Link href="/posts/tccs"><a class="btn btn-success">Ver Pesquisas</a></Link>
          </li>
          </ul>
      </nav>
    )
}
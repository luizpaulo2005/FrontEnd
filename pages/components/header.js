import Link from "next/link";

export default function Header(){
    return(
        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
        <Link href="/"><a class="navbar-brand">Biblioteca Digital de Pesquisas - IFMS</a></Link>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
        <Link href="/posts/tccs"><a class="nav-link">Ver Pesquisas</a></Link>
          </li>
          
          </ul>
          </div>
      </nav>
    )
}
import { useState } from 'react';
import {
  Card,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@ui';

export const SimpleTable = () => {
  const [showEntities, setShowEntities] = useState(200);
  return (
    <Card title="Заголовок таблицы">
      <div className="flex items-center gap-1 text-sm my-5">
        <span>Show</span>
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-orange-100 rounded-full flex justify-end self-baseline px-2">
            <span>{showEntities}</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel onClick={() => setShowEntities(100)}>
              100
            </DropdownMenuLabel>
            <DropdownMenuLabel onClick={() => setShowEntities(200)}>
              200
            </DropdownMenuLabel>
            <DropdownMenuLabel onClick={() => setShowEntities(300)}>
              300
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
        <span>entries</span>
      </div>
      <Table className="border rounded-lg">
        <TableHeader>
          <TableRow>
            <TableHead className="border rounded-lg">Дата публикации</TableHead>
            <TableHead className="border rounded-lg">
              Тип медиа источника
            </TableHead>
            <TableHead className="border rounded-lg">Медиа источник</TableHead>
            <TableHead className="border rounded-lg text-left">1</TableHead>
            <TableHead className="border rounded-lg text-left">2</TableHead>
            <TableHead className="border rounded-lg text-left">3</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="border rounded-lg p-10"></TableCell>
            <TableCell className="border rounded-lg p-10"></TableCell>
            <TableCell className="border rounded-lg p-10"></TableCell>
            <TableCell className="border rounded-lg p-10"></TableCell>
            <TableCell className="border rounded-lg p-10"></TableCell>
            <TableCell className="border rounded-lg p-10"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border rounded-lg p-10"></TableCell>
            <TableCell className="border rounded-lg p-10"></TableCell>
            <TableCell className="border rounded-lg p-10"></TableCell>
            <TableCell className="border rounded-lg p-10"></TableCell>
            <TableCell className="border rounded-lg p-10"></TableCell>
            <TableCell className="border rounded-lg p-10"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border rounded-lg p-10"></TableCell>
            <TableCell className="border rounded-lg p-10"></TableCell>
            <TableCell className="border rounded-lg p-10"></TableCell>
            <TableCell className="border rounded-lg p-10"></TableCell>
            <TableCell className="border rounded-lg p-10"></TableCell>
            <TableCell className="border rounded-lg p-10"></TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Pagination className="flex justify-end w-full max-w-full mt-2.5">
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </Card>
  );
};

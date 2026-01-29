package q;

import a0.o2;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class w3 {
    public static List a(int i10, boolean z10, boolean z11) {
        ArrayList arrayList = new ArrayList();
        arrayList.addAll(f());
        if (i10 == 0 || i10 == 1 || i10 == 3) {
            arrayList.addAll(h());
        }
        if (i10 == 1 || i10 == 3) {
            arrayList.addAll(e());
        }
        if (z10) {
            arrayList.addAll(j());
        }
        if (z11 && i10 == 0) {
            arrayList.addAll(c());
        }
        if (i10 == 3) {
            arrayList.addAll(g());
        }
        return arrayList;
    }

    public static List b() {
        ArrayList arrayList = new ArrayList();
        a0.n2 n2Var = new a0.n2();
        o2.b bVar = o2.b.PRIV;
        o2.a aVar = o2.a.MAXIMUM;
        n2Var.a(a0.o2.a(bVar, aVar));
        arrayList.add(n2Var);
        a0.n2 n2Var2 = new a0.n2();
        o2.b bVar2 = o2.b.YUV;
        n2Var2.a(a0.o2.a(bVar2, aVar));
        arrayList.add(n2Var2);
        a0.n2 n2Var3 = new a0.n2();
        o2.a aVar2 = o2.a.PREVIEW;
        n2Var3.a(a0.o2.a(bVar, aVar2));
        o2.b bVar3 = o2.b.JPEG;
        n2Var3.a(a0.o2.a(bVar3, aVar));
        arrayList.add(n2Var3);
        a0.n2 n2Var4 = new a0.n2();
        n2Var4.a(a0.o2.a(bVar, aVar2));
        n2Var4.a(a0.o2.a(bVar2, aVar));
        arrayList.add(n2Var4);
        a0.n2 n2Var5 = new a0.n2();
        n2Var5.a(a0.o2.a(bVar2, aVar2));
        n2Var5.a(a0.o2.a(bVar2, aVar));
        arrayList.add(n2Var5);
        a0.n2 n2Var6 = new a0.n2();
        n2Var6.a(a0.o2.a(bVar, aVar2));
        o2.a aVar3 = o2.a.RECORD;
        n2Var6.a(a0.o2.a(bVar, aVar3));
        arrayList.add(n2Var6);
        a0.n2 n2Var7 = new a0.n2();
        n2Var7.a(a0.o2.a(bVar, aVar2));
        n2Var7.a(a0.o2.a(bVar, aVar3));
        n2Var7.a(a0.o2.a(bVar2, aVar3));
        arrayList.add(n2Var7);
        a0.n2 n2Var8 = new a0.n2();
        n2Var8.a(a0.o2.a(bVar, aVar2));
        n2Var8.a(a0.o2.a(bVar, aVar3));
        n2Var8.a(a0.o2.a(bVar3, aVar3));
        arrayList.add(n2Var8);
        return arrayList;
    }

    public static List c() {
        ArrayList arrayList = new ArrayList();
        a0.n2 n2Var = new a0.n2();
        o2.b bVar = o2.b.PRIV;
        o2.a aVar = o2.a.PREVIEW;
        n2Var.a(a0.o2.a(bVar, aVar));
        o2.a aVar2 = o2.a.MAXIMUM;
        n2Var.a(a0.o2.a(bVar, aVar2));
        arrayList.add(n2Var);
        a0.n2 n2Var2 = new a0.n2();
        n2Var2.a(a0.o2.a(bVar, aVar));
        o2.b bVar2 = o2.b.YUV;
        n2Var2.a(a0.o2.a(bVar2, aVar2));
        arrayList.add(n2Var2);
        a0.n2 n2Var3 = new a0.n2();
        n2Var3.a(a0.o2.a(bVar2, aVar));
        n2Var3.a(a0.o2.a(bVar2, aVar2));
        arrayList.add(n2Var3);
        return arrayList;
    }

    public static List d() {
        ArrayList arrayList = new ArrayList();
        a0.n2 n2Var = new a0.n2();
        o2.b bVar = o2.b.YUV;
        o2.a aVar = o2.a.s1440p;
        n2Var.a(a0.o2.a(bVar, aVar));
        arrayList.add(n2Var);
        a0.n2 n2Var2 = new a0.n2();
        o2.b bVar2 = o2.b.PRIV;
        n2Var2.a(a0.o2.a(bVar2, aVar));
        arrayList.add(n2Var2);
        a0.n2 n2Var3 = new a0.n2();
        o2.b bVar3 = o2.b.JPEG;
        n2Var3.a(a0.o2.a(bVar3, aVar));
        arrayList.add(n2Var3);
        a0.n2 n2Var4 = new a0.n2();
        o2.a aVar2 = o2.a.s720p;
        n2Var4.a(a0.o2.a(bVar, aVar2));
        n2Var4.a(a0.o2.a(bVar3, aVar));
        arrayList.add(n2Var4);
        a0.n2 n2Var5 = new a0.n2();
        n2Var5.a(a0.o2.a(bVar2, aVar2));
        n2Var5.a(a0.o2.a(bVar3, aVar));
        arrayList.add(n2Var5);
        a0.n2 n2Var6 = new a0.n2();
        n2Var6.a(a0.o2.a(bVar, aVar2));
        n2Var6.a(a0.o2.a(bVar, aVar));
        arrayList.add(n2Var6);
        a0.n2 n2Var7 = new a0.n2();
        n2Var7.a(a0.o2.a(bVar, aVar2));
        n2Var7.a(a0.o2.a(bVar2, aVar));
        arrayList.add(n2Var7);
        a0.n2 n2Var8 = new a0.n2();
        n2Var8.a(a0.o2.a(bVar2, aVar2));
        n2Var8.a(a0.o2.a(bVar, aVar));
        arrayList.add(n2Var8);
        a0.n2 n2Var9 = new a0.n2();
        n2Var9.a(a0.o2.a(bVar2, aVar2));
        n2Var9.a(a0.o2.a(bVar2, aVar));
        arrayList.add(n2Var9);
        return arrayList;
    }

    public static List e() {
        ArrayList arrayList = new ArrayList();
        a0.n2 n2Var = new a0.n2();
        o2.b bVar = o2.b.PRIV;
        o2.a aVar = o2.a.PREVIEW;
        n2Var.a(a0.o2.a(bVar, aVar));
        o2.a aVar2 = o2.a.MAXIMUM;
        n2Var.a(a0.o2.a(bVar, aVar2));
        arrayList.add(n2Var);
        a0.n2 n2Var2 = new a0.n2();
        n2Var2.a(a0.o2.a(bVar, aVar));
        o2.b bVar2 = o2.b.YUV;
        n2Var2.a(a0.o2.a(bVar2, aVar2));
        arrayList.add(n2Var2);
        a0.n2 n2Var3 = new a0.n2();
        n2Var3.a(a0.o2.a(bVar2, aVar));
        n2Var3.a(a0.o2.a(bVar2, aVar2));
        arrayList.add(n2Var3);
        a0.n2 n2Var4 = new a0.n2();
        n2Var4.a(a0.o2.a(bVar, aVar));
        n2Var4.a(a0.o2.a(bVar, aVar));
        n2Var4.a(a0.o2.a(o2.b.JPEG, aVar2));
        arrayList.add(n2Var4);
        a0.n2 n2Var5 = new a0.n2();
        o2.a aVar3 = o2.a.VGA;
        n2Var5.a(a0.o2.a(bVar2, aVar3));
        n2Var5.a(a0.o2.a(bVar, aVar));
        n2Var5.a(a0.o2.a(bVar2, aVar2));
        arrayList.add(n2Var5);
        a0.n2 n2Var6 = new a0.n2();
        n2Var6.a(a0.o2.a(bVar2, aVar3));
        n2Var6.a(a0.o2.a(bVar2, aVar));
        n2Var6.a(a0.o2.a(bVar2, aVar2));
        arrayList.add(n2Var6);
        return arrayList;
    }

    public static List f() {
        ArrayList arrayList = new ArrayList();
        a0.n2 n2Var = new a0.n2();
        o2.b bVar = o2.b.PRIV;
        o2.a aVar = o2.a.MAXIMUM;
        n2Var.a(a0.o2.a(bVar, aVar));
        arrayList.add(n2Var);
        a0.n2 n2Var2 = new a0.n2();
        o2.b bVar2 = o2.b.JPEG;
        n2Var2.a(a0.o2.a(bVar2, aVar));
        arrayList.add(n2Var2);
        a0.n2 n2Var3 = new a0.n2();
        o2.b bVar3 = o2.b.YUV;
        n2Var3.a(a0.o2.a(bVar3, aVar));
        arrayList.add(n2Var3);
        a0.n2 n2Var4 = new a0.n2();
        o2.a aVar2 = o2.a.PREVIEW;
        n2Var4.a(a0.o2.a(bVar, aVar2));
        n2Var4.a(a0.o2.a(bVar2, aVar));
        arrayList.add(n2Var4);
        a0.n2 n2Var5 = new a0.n2();
        n2Var5.a(a0.o2.a(bVar3, aVar2));
        n2Var5.a(a0.o2.a(bVar2, aVar));
        arrayList.add(n2Var5);
        a0.n2 n2Var6 = new a0.n2();
        n2Var6.a(a0.o2.a(bVar, aVar2));
        n2Var6.a(a0.o2.a(bVar, aVar2));
        arrayList.add(n2Var6);
        a0.n2 n2Var7 = new a0.n2();
        n2Var7.a(a0.o2.a(bVar, aVar2));
        n2Var7.a(a0.o2.a(bVar3, aVar2));
        arrayList.add(n2Var7);
        a0.n2 n2Var8 = new a0.n2();
        n2Var8.a(a0.o2.a(bVar, aVar2));
        n2Var8.a(a0.o2.a(bVar3, aVar2));
        n2Var8.a(a0.o2.a(bVar2, aVar));
        arrayList.add(n2Var8);
        return arrayList;
    }

    public static List g() {
        ArrayList arrayList = new ArrayList();
        a0.n2 n2Var = new a0.n2();
        o2.b bVar = o2.b.PRIV;
        o2.a aVar = o2.a.PREVIEW;
        n2Var.a(a0.o2.a(bVar, aVar));
        o2.a aVar2 = o2.a.VGA;
        n2Var.a(a0.o2.a(bVar, aVar2));
        o2.b bVar2 = o2.b.YUV;
        o2.a aVar3 = o2.a.MAXIMUM;
        n2Var.a(a0.o2.a(bVar2, aVar3));
        o2.b bVar3 = o2.b.RAW;
        n2Var.a(a0.o2.a(bVar3, aVar3));
        arrayList.add(n2Var);
        a0.n2 n2Var2 = new a0.n2();
        n2Var2.a(a0.o2.a(bVar, aVar));
        n2Var2.a(a0.o2.a(bVar, aVar2));
        n2Var2.a(a0.o2.a(o2.b.JPEG, aVar3));
        n2Var2.a(a0.o2.a(bVar3, aVar3));
        arrayList.add(n2Var2);
        return arrayList;
    }

    public static List h() {
        ArrayList arrayList = new ArrayList();
        a0.n2 n2Var = new a0.n2();
        o2.b bVar = o2.b.PRIV;
        o2.a aVar = o2.a.PREVIEW;
        n2Var.a(a0.o2.a(bVar, aVar));
        o2.a aVar2 = o2.a.RECORD;
        n2Var.a(a0.o2.a(bVar, aVar2));
        arrayList.add(n2Var);
        a0.n2 n2Var2 = new a0.n2();
        n2Var2.a(a0.o2.a(bVar, aVar));
        o2.b bVar2 = o2.b.YUV;
        n2Var2.a(a0.o2.a(bVar2, aVar2));
        arrayList.add(n2Var2);
        a0.n2 n2Var3 = new a0.n2();
        n2Var3.a(a0.o2.a(bVar2, aVar));
        n2Var3.a(a0.o2.a(bVar2, aVar2));
        arrayList.add(n2Var3);
        a0.n2 n2Var4 = new a0.n2();
        n2Var4.a(a0.o2.a(bVar, aVar));
        n2Var4.a(a0.o2.a(bVar, aVar2));
        o2.b bVar3 = o2.b.JPEG;
        n2Var4.a(a0.o2.a(bVar3, aVar2));
        arrayList.add(n2Var4);
        a0.n2 n2Var5 = new a0.n2();
        n2Var5.a(a0.o2.a(bVar, aVar));
        n2Var5.a(a0.o2.a(bVar2, aVar2));
        n2Var5.a(a0.o2.a(bVar3, aVar2));
        arrayList.add(n2Var5);
        a0.n2 n2Var6 = new a0.n2();
        n2Var6.a(a0.o2.a(bVar2, aVar));
        n2Var6.a(a0.o2.a(bVar2, aVar));
        n2Var6.a(a0.o2.a(bVar3, o2.a.MAXIMUM));
        arrayList.add(n2Var6);
        return arrayList;
    }

    public static List i() {
        ArrayList arrayList = new ArrayList();
        a0.n2 n2Var = new a0.n2();
        o2.b bVar = o2.b.PRIV;
        o2.a aVar = o2.a.s1440p;
        n2Var.a(a0.o2.a(bVar, aVar));
        arrayList.add(n2Var);
        a0.n2 n2Var2 = new a0.n2();
        o2.b bVar2 = o2.b.YUV;
        n2Var2.a(a0.o2.a(bVar2, aVar));
        arrayList.add(n2Var2);
        a0.n2 n2Var3 = new a0.n2();
        n2Var3.a(a0.o2.a(bVar, aVar));
        o2.b bVar3 = o2.b.JPEG;
        o2.a aVar2 = o2.a.MAXIMUM;
        n2Var3.a(a0.o2.a(bVar3, aVar2));
        arrayList.add(n2Var3);
        a0.n2 n2Var4 = new a0.n2();
        n2Var4.a(a0.o2.a(bVar2, aVar));
        n2Var4.a(a0.o2.a(bVar3, aVar2));
        arrayList.add(n2Var4);
        a0.n2 n2Var5 = new a0.n2();
        n2Var5.a(a0.o2.a(bVar, aVar));
        n2Var5.a(a0.o2.a(bVar2, aVar2));
        arrayList.add(n2Var5);
        a0.n2 n2Var6 = new a0.n2();
        n2Var6.a(a0.o2.a(bVar2, aVar));
        n2Var6.a(a0.o2.a(bVar2, aVar2));
        arrayList.add(n2Var6);
        a0.n2 n2Var7 = new a0.n2();
        o2.a aVar3 = o2.a.PREVIEW;
        n2Var7.a(a0.o2.a(bVar, aVar3));
        n2Var7.a(a0.o2.a(bVar, aVar));
        arrayList.add(n2Var7);
        a0.n2 n2Var8 = new a0.n2();
        n2Var8.a(a0.o2.a(bVar2, aVar3));
        n2Var8.a(a0.o2.a(bVar, aVar));
        arrayList.add(n2Var8);
        a0.n2 n2Var9 = new a0.n2();
        n2Var9.a(a0.o2.a(bVar, aVar3));
        n2Var9.a(a0.o2.a(bVar2, aVar));
        arrayList.add(n2Var9);
        a0.n2 n2Var10 = new a0.n2();
        n2Var10.a(a0.o2.a(bVar2, aVar3));
        n2Var10.a(a0.o2.a(bVar2, aVar));
        arrayList.add(n2Var10);
        return arrayList;
    }

    public static List j() {
        ArrayList arrayList = new ArrayList();
        a0.n2 n2Var = new a0.n2();
        o2.b bVar = o2.b.RAW;
        o2.a aVar = o2.a.MAXIMUM;
        n2Var.a(a0.o2.a(bVar, aVar));
        arrayList.add(n2Var);
        a0.n2 n2Var2 = new a0.n2();
        o2.b bVar2 = o2.b.PRIV;
        o2.a aVar2 = o2.a.PREVIEW;
        n2Var2.a(a0.o2.a(bVar2, aVar2));
        n2Var2.a(a0.o2.a(bVar, aVar));
        arrayList.add(n2Var2);
        a0.n2 n2Var3 = new a0.n2();
        o2.b bVar3 = o2.b.YUV;
        n2Var3.a(a0.o2.a(bVar3, aVar2));
        n2Var3.a(a0.o2.a(bVar, aVar));
        arrayList.add(n2Var3);
        a0.n2 n2Var4 = new a0.n2();
        n2Var4.a(a0.o2.a(bVar2, aVar2));
        n2Var4.a(a0.o2.a(bVar2, aVar2));
        n2Var4.a(a0.o2.a(bVar, aVar));
        arrayList.add(n2Var4);
        a0.n2 n2Var5 = new a0.n2();
        n2Var5.a(a0.o2.a(bVar2, aVar2));
        n2Var5.a(a0.o2.a(bVar3, aVar2));
        n2Var5.a(a0.o2.a(bVar, aVar));
        arrayList.add(n2Var5);
        a0.n2 n2Var6 = new a0.n2();
        n2Var6.a(a0.o2.a(bVar3, aVar2));
        n2Var6.a(a0.o2.a(bVar3, aVar2));
        n2Var6.a(a0.o2.a(bVar, aVar));
        arrayList.add(n2Var6);
        a0.n2 n2Var7 = new a0.n2();
        n2Var7.a(a0.o2.a(bVar2, aVar2));
        o2.b bVar4 = o2.b.JPEG;
        n2Var7.a(a0.o2.a(bVar4, aVar));
        n2Var7.a(a0.o2.a(bVar, aVar));
        arrayList.add(n2Var7);
        a0.n2 n2Var8 = new a0.n2();
        n2Var8.a(a0.o2.a(bVar3, aVar2));
        n2Var8.a(a0.o2.a(bVar4, aVar));
        n2Var8.a(a0.o2.a(bVar, aVar));
        arrayList.add(n2Var8);
        return arrayList;
    }

    public static List k() {
        ArrayList arrayList = new ArrayList();
        a0.n2 n2Var = new a0.n2();
        o2.b bVar = o2.b.PRIV;
        o2.a aVar = o2.a.s1440p;
        n2Var.a(a0.o2.b(bVar, aVar, 4L));
        arrayList.add(n2Var);
        a0.n2 n2Var2 = new a0.n2();
        o2.b bVar2 = o2.b.YUV;
        n2Var2.a(a0.o2.b(bVar2, aVar, 4L));
        arrayList.add(n2Var2);
        a0.n2 n2Var3 = new a0.n2();
        o2.a aVar2 = o2.a.RECORD;
        n2Var3.a(a0.o2.b(bVar, aVar2, 3L));
        arrayList.add(n2Var3);
        a0.n2 n2Var4 = new a0.n2();
        n2Var4.a(a0.o2.b(bVar2, aVar2, 3L));
        arrayList.add(n2Var4);
        a0.n2 n2Var5 = new a0.n2();
        o2.b bVar3 = o2.b.JPEG;
        o2.a aVar3 = o2.a.MAXIMUM;
        n2Var5.a(a0.o2.b(bVar3, aVar3, 2L));
        arrayList.add(n2Var5);
        a0.n2 n2Var6 = new a0.n2();
        n2Var6.a(a0.o2.b(bVar2, aVar3, 2L));
        arrayList.add(n2Var6);
        a0.n2 n2Var7 = new a0.n2();
        o2.a aVar4 = o2.a.PREVIEW;
        n2Var7.a(a0.o2.b(bVar, aVar4, 1L));
        n2Var7.a(a0.o2.b(bVar3, aVar3, 2L));
        arrayList.add(n2Var7);
        a0.n2 n2Var8 = new a0.n2();
        n2Var8.a(a0.o2.b(bVar, aVar4, 1L));
        n2Var8.a(a0.o2.b(bVar2, aVar3, 2L));
        arrayList.add(n2Var8);
        a0.n2 n2Var9 = new a0.n2();
        n2Var9.a(a0.o2.b(bVar, aVar4, 1L));
        n2Var9.a(a0.o2.b(bVar, aVar2, 3L));
        arrayList.add(n2Var9);
        a0.n2 n2Var10 = new a0.n2();
        n2Var10.a(a0.o2.b(bVar, aVar4, 1L));
        n2Var10.a(a0.o2.b(bVar2, aVar2, 3L));
        arrayList.add(n2Var10);
        a0.n2 n2Var11 = new a0.n2();
        n2Var11.a(a0.o2.b(bVar, aVar4, 1L));
        n2Var11.a(a0.o2.b(bVar2, aVar4, 1L));
        arrayList.add(n2Var11);
        a0.n2 n2Var12 = new a0.n2();
        n2Var12.a(a0.o2.b(bVar, aVar4, 1L));
        n2Var12.a(a0.o2.b(bVar, aVar2, 3L));
        n2Var12.a(a0.o2.b(bVar3, aVar2, 2L));
        arrayList.add(n2Var12);
        a0.n2 n2Var13 = new a0.n2();
        n2Var13.a(a0.o2.b(bVar, aVar4, 1L));
        n2Var13.a(a0.o2.b(bVar2, aVar2, 3L));
        n2Var13.a(a0.o2.b(bVar3, aVar2, 2L));
        arrayList.add(n2Var13);
        a0.n2 n2Var14 = new a0.n2();
        n2Var14.a(a0.o2.b(bVar, aVar4, 1L));
        n2Var14.a(a0.o2.b(bVar2, aVar4, 1L));
        n2Var14.a(a0.o2.b(bVar3, aVar3, 2L));
        arrayList.add(n2Var14);
        return arrayList;
    }

    public static List l() {
        ArrayList arrayList = new ArrayList();
        a0.n2 n2Var = new a0.n2();
        o2.b bVar = o2.b.JPEG_R;
        o2.a aVar = o2.a.MAXIMUM;
        n2Var.a(a0.o2.a(bVar, aVar));
        arrayList.add(n2Var);
        a0.n2 n2Var2 = new a0.n2();
        n2Var2.a(a0.o2.a(o2.b.PRIV, o2.a.PREVIEW));
        n2Var2.a(a0.o2.a(bVar, aVar));
        arrayList.add(n2Var2);
        return arrayList;
    }

    public static List m() {
        ArrayList arrayList = new ArrayList();
        a0.n2 n2Var = new a0.n2();
        o2.b bVar = o2.b.YUV;
        o2.a aVar = o2.a.ULTRA_MAXIMUM;
        n2Var.a(a0.o2.a(bVar, aVar));
        o2.b bVar2 = o2.b.PRIV;
        o2.a aVar2 = o2.a.PREVIEW;
        n2Var.a(a0.o2.a(bVar2, aVar2));
        o2.a aVar3 = o2.a.RECORD;
        n2Var.a(a0.o2.a(bVar2, aVar3));
        arrayList.add(n2Var);
        a0.n2 n2Var2 = new a0.n2();
        o2.b bVar3 = o2.b.JPEG;
        n2Var2.a(a0.o2.a(bVar3, aVar));
        n2Var2.a(a0.o2.a(bVar2, aVar2));
        n2Var2.a(a0.o2.a(bVar2, aVar3));
        arrayList.add(n2Var2);
        a0.n2 n2Var3 = new a0.n2();
        o2.b bVar4 = o2.b.RAW;
        n2Var3.a(a0.o2.a(bVar4, aVar));
        n2Var3.a(a0.o2.a(bVar2, aVar2));
        n2Var3.a(a0.o2.a(bVar2, aVar3));
        arrayList.add(n2Var3);
        a0.n2 n2Var4 = new a0.n2();
        n2Var4.a(a0.o2.a(bVar, aVar));
        n2Var4.a(a0.o2.a(bVar2, aVar2));
        o2.a aVar4 = o2.a.MAXIMUM;
        n2Var4.a(a0.o2.a(bVar3, aVar4));
        arrayList.add(n2Var4);
        a0.n2 n2Var5 = new a0.n2();
        n2Var5.a(a0.o2.a(bVar3, aVar));
        n2Var5.a(a0.o2.a(bVar2, aVar2));
        n2Var5.a(a0.o2.a(bVar3, aVar4));
        arrayList.add(n2Var5);
        a0.n2 n2Var6 = new a0.n2();
        n2Var6.a(a0.o2.a(bVar4, aVar));
        n2Var6.a(a0.o2.a(bVar2, aVar2));
        n2Var6.a(a0.o2.a(bVar3, aVar4));
        arrayList.add(n2Var6);
        a0.n2 n2Var7 = new a0.n2();
        n2Var7.a(a0.o2.a(bVar, aVar));
        n2Var7.a(a0.o2.a(bVar2, aVar2));
        n2Var7.a(a0.o2.a(bVar, aVar4));
        arrayList.add(n2Var7);
        a0.n2 n2Var8 = new a0.n2();
        n2Var8.a(a0.o2.a(bVar3, aVar));
        n2Var8.a(a0.o2.a(bVar2, aVar2));
        n2Var8.a(a0.o2.a(bVar, aVar4));
        arrayList.add(n2Var8);
        a0.n2 n2Var9 = new a0.n2();
        n2Var9.a(a0.o2.a(bVar4, aVar));
        n2Var9.a(a0.o2.a(bVar2, aVar2));
        n2Var9.a(a0.o2.a(bVar, aVar4));
        arrayList.add(n2Var9);
        a0.n2 n2Var10 = new a0.n2();
        n2Var10.a(a0.o2.a(bVar, aVar));
        n2Var10.a(a0.o2.a(bVar2, aVar2));
        n2Var10.a(a0.o2.a(bVar4, aVar4));
        arrayList.add(n2Var10);
        a0.n2 n2Var11 = new a0.n2();
        n2Var11.a(a0.o2.a(bVar3, aVar));
        n2Var11.a(a0.o2.a(bVar2, aVar2));
        n2Var11.a(a0.o2.a(bVar4, aVar4));
        arrayList.add(n2Var11);
        a0.n2 n2Var12 = new a0.n2();
        n2Var12.a(a0.o2.a(bVar4, aVar));
        n2Var12.a(a0.o2.a(bVar2, aVar2));
        n2Var12.a(a0.o2.a(bVar4, aVar4));
        arrayList.add(n2Var12);
        return arrayList;
    }
}

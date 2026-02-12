package p9;

import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import p9.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b implements p9.a {

    /* renamed from: e  reason: collision with root package name */
    public static final a f41527e = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private p9.a f41528a;

    /* renamed from: b  reason: collision with root package name */
    private int f41529b = -1;

    /* renamed from: c  reason: collision with root package name */
    private ColorFilter f41530c;

    /* renamed from: d  reason: collision with root package name */
    private Rect f41531d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public b(p9.a aVar) {
        this.f41528a = aVar;
    }

    @Override // p9.d
    public int a() {
        p9.a aVar = this.f41528a;
        if (aVar == null) {
            return 0;
        }
        Intrinsics.checkNotNull(aVar);
        return aVar.a();
    }

    @Override // p9.d
    public int b() {
        p9.a aVar = this.f41528a;
        if (aVar == null) {
            return 0;
        }
        Intrinsics.checkNotNull(aVar);
        return aVar.b();
    }

    @Override // p9.a
    public int c() {
        p9.a aVar = this.f41528a;
        if (aVar == null) {
            return -1;
        }
        Intrinsics.checkNotNull(aVar);
        return aVar.c();
    }

    @Override // p9.a
    public void clear() {
        p9.a aVar = this.f41528a;
        if (aVar != null) {
            aVar.clear();
        }
    }

    @Override // p9.a
    public void d(Rect bounds) {
        Intrinsics.checkNotNullParameter(bounds, "bounds");
        p9.a aVar = this.f41528a;
        if (aVar != null) {
            aVar.d(bounds);
        }
        this.f41531d = bounds;
    }

    @Override // p9.a
    public int e() {
        p9.a aVar = this.f41528a;
        if (aVar == null) {
            return -1;
        }
        Intrinsics.checkNotNull(aVar);
        return aVar.e();
    }

    @Override // p9.a
    public void f(ColorFilter colorFilter) {
        p9.a aVar = this.f41528a;
        if (aVar != null) {
            aVar.f(colorFilter);
        }
        this.f41530c = colorFilter;
    }

    @Override // p9.d
    public int g() {
        p9.a aVar = this.f41528a;
        if (aVar == null) {
            return 0;
        }
        Intrinsics.checkNotNull(aVar);
        return aVar.g();
    }

    @Override // p9.a
    public boolean h(Drawable parent, Canvas canvas, int i10) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        p9.a aVar = this.f41528a;
        if (aVar == null || !aVar.h(parent, canvas, i10)) {
            return false;
        }
        return true;
    }

    @Override // p9.d
    public int j() {
        p9.a aVar = this.f41528a;
        if (aVar == null) {
            return 0;
        }
        Intrinsics.checkNotNull(aVar);
        return aVar.j();
    }

    @Override // p9.d
    public int k(int i10) {
        p9.a aVar = this.f41528a;
        if (aVar == null) {
            return 0;
        }
        Intrinsics.checkNotNull(aVar);
        return aVar.k(i10);
    }

    @Override // p9.a
    public void l(int i10) {
        p9.a aVar = this.f41528a;
        if (aVar != null) {
            aVar.l(i10);
        }
        this.f41529b = i10;
    }

    @Override // p9.d
    public int m() {
        p9.a aVar = this.f41528a;
        if (aVar == null) {
            return 0;
        }
        Intrinsics.checkNotNull(aVar);
        return aVar.m();
    }

    @Override // p9.a
    public void n(a.InterfaceC0586a interfaceC0586a) {
        p9.a aVar = this.f41528a;
        if (aVar != null) {
            aVar.n(interfaceC0586a);
        }
    }
}

package o9;

import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import o9.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b implements o9.a {

    /* renamed from: e  reason: collision with root package name */
    public static final a f41560e = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private o9.a f41561a;

    /* renamed from: b  reason: collision with root package name */
    private int f41562b = -1;

    /* renamed from: c  reason: collision with root package name */
    private ColorFilter f41563c;

    /* renamed from: d  reason: collision with root package name */
    private Rect f41564d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public b(o9.a aVar) {
        this.f41561a = aVar;
    }

    @Override // o9.d
    public int a() {
        o9.a aVar = this.f41561a;
        if (aVar == null) {
            return 0;
        }
        Intrinsics.checkNotNull(aVar);
        return aVar.a();
    }

    @Override // o9.d
    public int b() {
        o9.a aVar = this.f41561a;
        if (aVar == null) {
            return 0;
        }
        Intrinsics.checkNotNull(aVar);
        return aVar.b();
    }

    @Override // o9.a
    public int c() {
        o9.a aVar = this.f41561a;
        if (aVar == null) {
            return -1;
        }
        Intrinsics.checkNotNull(aVar);
        return aVar.c();
    }

    @Override // o9.a
    public void clear() {
        o9.a aVar = this.f41561a;
        if (aVar != null) {
            aVar.clear();
        }
    }

    @Override // o9.a
    public void d(Rect bounds) {
        Intrinsics.checkNotNullParameter(bounds, "bounds");
        o9.a aVar = this.f41561a;
        if (aVar != null) {
            aVar.d(bounds);
        }
        this.f41564d = bounds;
    }

    @Override // o9.a
    public int e() {
        o9.a aVar = this.f41561a;
        if (aVar == null) {
            return -1;
        }
        Intrinsics.checkNotNull(aVar);
        return aVar.e();
    }

    @Override // o9.a
    public void f(ColorFilter colorFilter) {
        o9.a aVar = this.f41561a;
        if (aVar != null) {
            aVar.f(colorFilter);
        }
        this.f41563c = colorFilter;
    }

    @Override // o9.d
    public int g() {
        o9.a aVar = this.f41561a;
        if (aVar == null) {
            return 0;
        }
        Intrinsics.checkNotNull(aVar);
        return aVar.g();
    }

    @Override // o9.a
    public boolean h(Drawable parent, Canvas canvas, int i10) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        o9.a aVar = this.f41561a;
        if (aVar == null || !aVar.h(parent, canvas, i10)) {
            return false;
        }
        return true;
    }

    @Override // o9.d
    public int j() {
        o9.a aVar = this.f41561a;
        if (aVar == null) {
            return 0;
        }
        Intrinsics.checkNotNull(aVar);
        return aVar.j();
    }

    @Override // o9.a
    public void k(a.InterfaceC0557a interfaceC0557a) {
        o9.a aVar = this.f41561a;
        if (aVar != null) {
            aVar.k(interfaceC0557a);
        }
    }

    @Override // o9.d
    public int l(int i10) {
        o9.a aVar = this.f41561a;
        if (aVar == null) {
            return 0;
        }
        Intrinsics.checkNotNull(aVar);
        return aVar.l(i10);
    }

    @Override // o9.a
    public void m(int i10) {
        o9.a aVar = this.f41561a;
        if (aVar != null) {
            aVar.m(i10);
        }
        this.f41562b = i10;
    }

    @Override // o9.d
    public int n() {
        o9.a aVar = this.f41561a;
        if (aVar == null) {
            return 0;
        }
        Intrinsics.checkNotNull(aVar);
        return aVar.n();
    }
}

package g5;

import android.graphics.Bitmap;
import android.graphics.drawable.Drawable;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import j5.c;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineDispatcher;
import ys.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c {

    /* renamed from: a */
    private final CoroutineDispatcher f24773a;

    /* renamed from: b */
    private final CoroutineDispatcher f24774b;

    /* renamed from: c */
    private final CoroutineDispatcher f24775c;

    /* renamed from: d */
    private final CoroutineDispatcher f24776d;

    /* renamed from: e */
    private final c.a f24777e;

    /* renamed from: f */
    private final h5.e f24778f;

    /* renamed from: g */
    private final Bitmap.Config f24779g;

    /* renamed from: h */
    private final boolean f24780h;

    /* renamed from: i */
    private final boolean f24781i;

    /* renamed from: j */
    private final Drawable f24782j;

    /* renamed from: k */
    private final Drawable f24783k;

    /* renamed from: l */
    private final Drawable f24784l;

    /* renamed from: m */
    private final b f24785m;

    /* renamed from: n */
    private final b f24786n;

    /* renamed from: o */
    private final b f24787o;

    public c(CoroutineDispatcher coroutineDispatcher, CoroutineDispatcher coroutineDispatcher2, CoroutineDispatcher coroutineDispatcher3, CoroutineDispatcher coroutineDispatcher4, c.a aVar, h5.e eVar, Bitmap.Config config, boolean z10, boolean z11, Drawable drawable, Drawable drawable2, Drawable drawable3, b bVar, b bVar2, b bVar3) {
        this.f24773a = coroutineDispatcher;
        this.f24774b = coroutineDispatcher2;
        this.f24775c = coroutineDispatcher3;
        this.f24776d = coroutineDispatcher4;
        this.f24777e = aVar;
        this.f24778f = eVar;
        this.f24779g = config;
        this.f24780h = z10;
        this.f24781i = z11;
        this.f24782j = drawable;
        this.f24783k = drawable2;
        this.f24784l = drawable3;
        this.f24785m = bVar;
        this.f24786n = bVar2;
        this.f24787o = bVar3;
    }

    public static /* synthetic */ c b(c cVar, CoroutineDispatcher coroutineDispatcher, CoroutineDispatcher coroutineDispatcher2, CoroutineDispatcher coroutineDispatcher3, CoroutineDispatcher coroutineDispatcher4, c.a aVar, h5.e eVar, Bitmap.Config config, boolean z10, boolean z11, Drawable drawable, Drawable drawable2, Drawable drawable3, b bVar, b bVar2, b bVar3, int i10, Object obj) {
        CoroutineDispatcher coroutineDispatcher5;
        CoroutineDispatcher coroutineDispatcher6;
        CoroutineDispatcher coroutineDispatcher7;
        CoroutineDispatcher coroutineDispatcher8;
        c.a aVar2;
        h5.e eVar2;
        Bitmap.Config config2;
        boolean z12;
        boolean z13;
        Drawable drawable4;
        Drawable drawable5;
        Drawable drawable6;
        b bVar4;
        b bVar5;
        b bVar6;
        if ((i10 & 1) != 0) {
            coroutineDispatcher5 = cVar.f24773a;
        } else {
            coroutineDispatcher5 = coroutineDispatcher;
        }
        if ((i10 & 2) != 0) {
            coroutineDispatcher6 = cVar.f24774b;
        } else {
            coroutineDispatcher6 = coroutineDispatcher2;
        }
        if ((i10 & 4) != 0) {
            coroutineDispatcher7 = cVar.f24775c;
        } else {
            coroutineDispatcher7 = coroutineDispatcher3;
        }
        if ((i10 & 8) != 0) {
            coroutineDispatcher8 = cVar.f24776d;
        } else {
            coroutineDispatcher8 = coroutineDispatcher4;
        }
        if ((i10 & 16) != 0) {
            aVar2 = cVar.f24777e;
        } else {
            aVar2 = aVar;
        }
        if ((i10 & 32) != 0) {
            eVar2 = cVar.f24778f;
        } else {
            eVar2 = eVar;
        }
        if ((i10 & 64) != 0) {
            config2 = cVar.f24779g;
        } else {
            config2 = config;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            z12 = cVar.f24780h;
        } else {
            z12 = z10;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            z13 = cVar.f24781i;
        } else {
            z13 = z11;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
            drawable4 = cVar.f24782j;
        } else {
            drawable4 = drawable;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
            drawable5 = cVar.f24783k;
        } else {
            drawable5 = drawable2;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
            drawable6 = cVar.f24784l;
        } else {
            drawable6 = drawable3;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
            bVar4 = cVar.f24785m;
        } else {
            bVar4 = bVar;
        }
        if ((i10 & 8192) != 0) {
            bVar5 = cVar.f24786n;
        } else {
            bVar5 = bVar2;
        }
        if ((i10 & 16384) != 0) {
            bVar6 = cVar.f24787o;
        } else {
            bVar6 = bVar3;
        }
        return cVar.a(coroutineDispatcher5, coroutineDispatcher6, coroutineDispatcher7, coroutineDispatcher8, aVar2, eVar2, config2, z12, z13, drawable4, drawable5, drawable6, bVar4, bVar5, bVar6);
    }

    public final c a(CoroutineDispatcher coroutineDispatcher, CoroutineDispatcher coroutineDispatcher2, CoroutineDispatcher coroutineDispatcher3, CoroutineDispatcher coroutineDispatcher4, c.a aVar, h5.e eVar, Bitmap.Config config, boolean z10, boolean z11, Drawable drawable, Drawable drawable2, Drawable drawable3, b bVar, b bVar2, b bVar3) {
        return new c(coroutineDispatcher, coroutineDispatcher2, coroutineDispatcher3, coroutineDispatcher4, aVar, eVar, config, z10, z11, drawable, drawable2, drawable3, bVar, bVar2, bVar3);
    }

    public final boolean c() {
        return this.f24780h;
    }

    public final boolean d() {
        return this.f24781i;
    }

    public final Bitmap.Config e() {
        return this.f24779g;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c) {
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f24773a, cVar.f24773a) && Intrinsics.areEqual(this.f24774b, cVar.f24774b) && Intrinsics.areEqual(this.f24775c, cVar.f24775c) && Intrinsics.areEqual(this.f24776d, cVar.f24776d) && Intrinsics.areEqual(this.f24777e, cVar.f24777e) && this.f24778f == cVar.f24778f && this.f24779g == cVar.f24779g && this.f24780h == cVar.f24780h && this.f24781i == cVar.f24781i && Intrinsics.areEqual(this.f24782j, cVar.f24782j) && Intrinsics.areEqual(this.f24783k, cVar.f24783k) && Intrinsics.areEqual(this.f24784l, cVar.f24784l) && this.f24785m == cVar.f24785m && this.f24786n == cVar.f24786n && this.f24787o == cVar.f24787o) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final CoroutineDispatcher f() {
        return this.f24775c;
    }

    public final b g() {
        return this.f24786n;
    }

    public final Drawable h() {
        return this.f24783k;
    }

    public int hashCode() {
        int i10;
        int i11;
        int hashCode = ((((((((((((((((this.f24773a.hashCode() * 31) + this.f24774b.hashCode()) * 31) + this.f24775c.hashCode()) * 31) + this.f24776d.hashCode()) * 31) + this.f24777e.hashCode()) * 31) + this.f24778f.hashCode()) * 31) + this.f24779g.hashCode()) * 31) + Boolean.hashCode(this.f24780h)) * 31) + Boolean.hashCode(this.f24781i)) * 31;
        Drawable drawable = this.f24782j;
        int i12 = 0;
        if (drawable != null) {
            i10 = drawable.hashCode();
        } else {
            i10 = 0;
        }
        int i13 = (hashCode + i10) * 31;
        Drawable drawable2 = this.f24783k;
        if (drawable2 != null) {
            i11 = drawable2.hashCode();
        } else {
            i11 = 0;
        }
        int i14 = (i13 + i11) * 31;
        Drawable drawable3 = this.f24784l;
        if (drawable3 != null) {
            i12 = drawable3.hashCode();
        }
        return ((((((i14 + i12) * 31) + this.f24785m.hashCode()) * 31) + this.f24786n.hashCode()) * 31) + this.f24787o.hashCode();
    }

    public final Drawable i() {
        return this.f24784l;
    }

    public final CoroutineDispatcher j() {
        return this.f24774b;
    }

    public final CoroutineDispatcher k() {
        return this.f24773a;
    }

    public final b l() {
        return this.f24785m;
    }

    public final b m() {
        return this.f24787o;
    }

    public final Drawable n() {
        return this.f24782j;
    }

    public final h5.e o() {
        return this.f24778f;
    }

    public final CoroutineDispatcher p() {
        return this.f24776d;
    }

    public final c.a q() {
        return this.f24777e;
    }

    public /* synthetic */ c(CoroutineDispatcher coroutineDispatcher, CoroutineDispatcher coroutineDispatcher2, CoroutineDispatcher coroutineDispatcher3, CoroutineDispatcher coroutineDispatcher4, c.a aVar, h5.e eVar, Bitmap.Config config, boolean z10, boolean z11, Drawable drawable, Drawable drawable2, Drawable drawable3, b bVar, b bVar2, b bVar3, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? m0.c().P1() : coroutineDispatcher, (i10 & 2) != 0 ? m0.b() : coroutineDispatcher2, (i10 & 4) != 0 ? m0.b() : coroutineDispatcher3, (i10 & 8) != 0 ? m0.b() : coroutineDispatcher4, (i10 & 16) != 0 ? c.a.f30835b : aVar, (i10 & 32) != 0 ? h5.e.f26191i : eVar, (i10 & 64) != 0 ? k5.k.f() : config, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? true : z10, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? false : z11, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : drawable, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : drawable2, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 0 ? drawable3 : null, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? b.f24765i : bVar, (i10 & 8192) != 0 ? b.f24765i : bVar2, (i10 & 16384) != 0 ? b.f24765i : bVar3);
    }
}

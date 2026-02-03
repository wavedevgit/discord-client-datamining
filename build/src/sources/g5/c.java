package g5;

import android.graphics.Bitmap;
import android.graphics.drawable.Drawable;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import j5.c;
import js.m0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c {

    /* renamed from: a */
    private final CoroutineDispatcher f24995a;

    /* renamed from: b */
    private final CoroutineDispatcher f24996b;

    /* renamed from: c */
    private final CoroutineDispatcher f24997c;

    /* renamed from: d */
    private final CoroutineDispatcher f24998d;

    /* renamed from: e */
    private final c.a f24999e;

    /* renamed from: f */
    private final h5.e f25000f;

    /* renamed from: g */
    private final Bitmap.Config f25001g;

    /* renamed from: h */
    private final boolean f25002h;

    /* renamed from: i */
    private final boolean f25003i;

    /* renamed from: j */
    private final Drawable f25004j;

    /* renamed from: k */
    private final Drawable f25005k;

    /* renamed from: l */
    private final Drawable f25006l;

    /* renamed from: m */
    private final b f25007m;

    /* renamed from: n */
    private final b f25008n;

    /* renamed from: o */
    private final b f25009o;

    public c(CoroutineDispatcher coroutineDispatcher, CoroutineDispatcher coroutineDispatcher2, CoroutineDispatcher coroutineDispatcher3, CoroutineDispatcher coroutineDispatcher4, c.a aVar, h5.e eVar, Bitmap.Config config, boolean z10, boolean z11, Drawable drawable, Drawable drawable2, Drawable drawable3, b bVar, b bVar2, b bVar3) {
        this.f24995a = coroutineDispatcher;
        this.f24996b = coroutineDispatcher2;
        this.f24997c = coroutineDispatcher3;
        this.f24998d = coroutineDispatcher4;
        this.f24999e = aVar;
        this.f25000f = eVar;
        this.f25001g = config;
        this.f25002h = z10;
        this.f25003i = z11;
        this.f25004j = drawable;
        this.f25005k = drawable2;
        this.f25006l = drawable3;
        this.f25007m = bVar;
        this.f25008n = bVar2;
        this.f25009o = bVar3;
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
            coroutineDispatcher5 = cVar.f24995a;
        } else {
            coroutineDispatcher5 = coroutineDispatcher;
        }
        if ((i10 & 2) != 0) {
            coroutineDispatcher6 = cVar.f24996b;
        } else {
            coroutineDispatcher6 = coroutineDispatcher2;
        }
        if ((i10 & 4) != 0) {
            coroutineDispatcher7 = cVar.f24997c;
        } else {
            coroutineDispatcher7 = coroutineDispatcher3;
        }
        if ((i10 & 8) != 0) {
            coroutineDispatcher8 = cVar.f24998d;
        } else {
            coroutineDispatcher8 = coroutineDispatcher4;
        }
        if ((i10 & 16) != 0) {
            aVar2 = cVar.f24999e;
        } else {
            aVar2 = aVar;
        }
        if ((i10 & 32) != 0) {
            eVar2 = cVar.f25000f;
        } else {
            eVar2 = eVar;
        }
        if ((i10 & 64) != 0) {
            config2 = cVar.f25001g;
        } else {
            config2 = config;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            z12 = cVar.f25002h;
        } else {
            z12 = z10;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            z13 = cVar.f25003i;
        } else {
            z13 = z11;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
            drawable4 = cVar.f25004j;
        } else {
            drawable4 = drawable;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
            drawable5 = cVar.f25005k;
        } else {
            drawable5 = drawable2;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
            drawable6 = cVar.f25006l;
        } else {
            drawable6 = drawable3;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
            bVar4 = cVar.f25007m;
        } else {
            bVar4 = bVar;
        }
        if ((i10 & 8192) != 0) {
            bVar5 = cVar.f25008n;
        } else {
            bVar5 = bVar2;
        }
        if ((i10 & 16384) != 0) {
            bVar6 = cVar.f25009o;
        } else {
            bVar6 = bVar3;
        }
        return cVar.a(coroutineDispatcher5, coroutineDispatcher6, coroutineDispatcher7, coroutineDispatcher8, aVar2, eVar2, config2, z12, z13, drawable4, drawable5, drawable6, bVar4, bVar5, bVar6);
    }

    public final c a(CoroutineDispatcher coroutineDispatcher, CoroutineDispatcher coroutineDispatcher2, CoroutineDispatcher coroutineDispatcher3, CoroutineDispatcher coroutineDispatcher4, c.a aVar, h5.e eVar, Bitmap.Config config, boolean z10, boolean z11, Drawable drawable, Drawable drawable2, Drawable drawable3, b bVar, b bVar2, b bVar3) {
        return new c(coroutineDispatcher, coroutineDispatcher2, coroutineDispatcher3, coroutineDispatcher4, aVar, eVar, config, z10, z11, drawable, drawable2, drawable3, bVar, bVar2, bVar3);
    }

    public final boolean c() {
        return this.f25002h;
    }

    public final boolean d() {
        return this.f25003i;
    }

    public final Bitmap.Config e() {
        return this.f25001g;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c) {
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f24995a, cVar.f24995a) && Intrinsics.areEqual(this.f24996b, cVar.f24996b) && Intrinsics.areEqual(this.f24997c, cVar.f24997c) && Intrinsics.areEqual(this.f24998d, cVar.f24998d) && Intrinsics.areEqual(this.f24999e, cVar.f24999e) && this.f25000f == cVar.f25000f && this.f25001g == cVar.f25001g && this.f25002h == cVar.f25002h && this.f25003i == cVar.f25003i && Intrinsics.areEqual(this.f25004j, cVar.f25004j) && Intrinsics.areEqual(this.f25005k, cVar.f25005k) && Intrinsics.areEqual(this.f25006l, cVar.f25006l) && this.f25007m == cVar.f25007m && this.f25008n == cVar.f25008n && this.f25009o == cVar.f25009o) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final CoroutineDispatcher f() {
        return this.f24997c;
    }

    public final b g() {
        return this.f25008n;
    }

    public final Drawable h() {
        return this.f25005k;
    }

    public int hashCode() {
        int i10;
        int i11;
        int hashCode = ((((((((((((((((this.f24995a.hashCode() * 31) + this.f24996b.hashCode()) * 31) + this.f24997c.hashCode()) * 31) + this.f24998d.hashCode()) * 31) + this.f24999e.hashCode()) * 31) + this.f25000f.hashCode()) * 31) + this.f25001g.hashCode()) * 31) + Boolean.hashCode(this.f25002h)) * 31) + Boolean.hashCode(this.f25003i)) * 31;
        Drawable drawable = this.f25004j;
        int i12 = 0;
        if (drawable != null) {
            i10 = drawable.hashCode();
        } else {
            i10 = 0;
        }
        int i13 = (hashCode + i10) * 31;
        Drawable drawable2 = this.f25005k;
        if (drawable2 != null) {
            i11 = drawable2.hashCode();
        } else {
            i11 = 0;
        }
        int i14 = (i13 + i11) * 31;
        Drawable drawable3 = this.f25006l;
        if (drawable3 != null) {
            i12 = drawable3.hashCode();
        }
        return ((((((i14 + i12) * 31) + this.f25007m.hashCode()) * 31) + this.f25008n.hashCode()) * 31) + this.f25009o.hashCode();
    }

    public final Drawable i() {
        return this.f25006l;
    }

    public final CoroutineDispatcher j() {
        return this.f24996b;
    }

    public final CoroutineDispatcher k() {
        return this.f24995a;
    }

    public final b l() {
        return this.f25007m;
    }

    public final b m() {
        return this.f25009o;
    }

    public final Drawable n() {
        return this.f25004j;
    }

    public final h5.e o() {
        return this.f25000f;
    }

    public final CoroutineDispatcher p() {
        return this.f24998d;
    }

    public final c.a q() {
        return this.f24999e;
    }

    public /* synthetic */ c(CoroutineDispatcher coroutineDispatcher, CoroutineDispatcher coroutineDispatcher2, CoroutineDispatcher coroutineDispatcher3, CoroutineDispatcher coroutineDispatcher4, c.a aVar, h5.e eVar, Bitmap.Config config, boolean z10, boolean z11, Drawable drawable, Drawable drawable2, Drawable drawable3, b bVar, b bVar2, b bVar3, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? m0.c().f2() : coroutineDispatcher, (i10 & 2) != 0 ? m0.b() : coroutineDispatcher2, (i10 & 4) != 0 ? m0.b() : coroutineDispatcher3, (i10 & 8) != 0 ? m0.b() : coroutineDispatcher4, (i10 & 16) != 0 ? c.a.f31410b : aVar, (i10 & 32) != 0 ? h5.e.f26821i : eVar, (i10 & 64) != 0 ? k5.k.f() : config, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? true : z10, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? false : z11, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : drawable, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : drawable2, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 0 ? drawable3 : null, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? b.f24987i : bVar, (i10 & 8192) != 0 ? b.f24987i : bVar2, (i10 & 16384) != 0 ? b.f24987i : bVar3);
    }
}

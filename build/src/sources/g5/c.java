package g5;

import android.graphics.Bitmap;
import android.graphics.drawable.Drawable;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import gs.m0;
import j5.c;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c {

    /* renamed from: a */
    private final CoroutineDispatcher f25703a;

    /* renamed from: b */
    private final CoroutineDispatcher f25704b;

    /* renamed from: c */
    private final CoroutineDispatcher f25705c;

    /* renamed from: d */
    private final CoroutineDispatcher f25706d;

    /* renamed from: e */
    private final c.a f25707e;

    /* renamed from: f */
    private final h5.e f25708f;

    /* renamed from: g */
    private final Bitmap.Config f25709g;

    /* renamed from: h */
    private final boolean f25710h;

    /* renamed from: i */
    private final boolean f25711i;

    /* renamed from: j */
    private final Drawable f25712j;

    /* renamed from: k */
    private final Drawable f25713k;

    /* renamed from: l */
    private final Drawable f25714l;

    /* renamed from: m */
    private final b f25715m;

    /* renamed from: n */
    private final b f25716n;

    /* renamed from: o */
    private final b f25717o;

    public c(CoroutineDispatcher coroutineDispatcher, CoroutineDispatcher coroutineDispatcher2, CoroutineDispatcher coroutineDispatcher3, CoroutineDispatcher coroutineDispatcher4, c.a aVar, h5.e eVar, Bitmap.Config config, boolean z10, boolean z11, Drawable drawable, Drawable drawable2, Drawable drawable3, b bVar, b bVar2, b bVar3) {
        this.f25703a = coroutineDispatcher;
        this.f25704b = coroutineDispatcher2;
        this.f25705c = coroutineDispatcher3;
        this.f25706d = coroutineDispatcher4;
        this.f25707e = aVar;
        this.f25708f = eVar;
        this.f25709g = config;
        this.f25710h = z10;
        this.f25711i = z11;
        this.f25712j = drawable;
        this.f25713k = drawable2;
        this.f25714l = drawable3;
        this.f25715m = bVar;
        this.f25716n = bVar2;
        this.f25717o = bVar3;
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
            coroutineDispatcher5 = cVar.f25703a;
        } else {
            coroutineDispatcher5 = coroutineDispatcher;
        }
        if ((i10 & 2) != 0) {
            coroutineDispatcher6 = cVar.f25704b;
        } else {
            coroutineDispatcher6 = coroutineDispatcher2;
        }
        if ((i10 & 4) != 0) {
            coroutineDispatcher7 = cVar.f25705c;
        } else {
            coroutineDispatcher7 = coroutineDispatcher3;
        }
        if ((i10 & 8) != 0) {
            coroutineDispatcher8 = cVar.f25706d;
        } else {
            coroutineDispatcher8 = coroutineDispatcher4;
        }
        if ((i10 & 16) != 0) {
            aVar2 = cVar.f25707e;
        } else {
            aVar2 = aVar;
        }
        if ((i10 & 32) != 0) {
            eVar2 = cVar.f25708f;
        } else {
            eVar2 = eVar;
        }
        if ((i10 & 64) != 0) {
            config2 = cVar.f25709g;
        } else {
            config2 = config;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            z12 = cVar.f25710h;
        } else {
            z12 = z10;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            z13 = cVar.f25711i;
        } else {
            z13 = z11;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
            drawable4 = cVar.f25712j;
        } else {
            drawable4 = drawable;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
            drawable5 = cVar.f25713k;
        } else {
            drawable5 = drawable2;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
            drawable6 = cVar.f25714l;
        } else {
            drawable6 = drawable3;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
            bVar4 = cVar.f25715m;
        } else {
            bVar4 = bVar;
        }
        if ((i10 & 8192) != 0) {
            bVar5 = cVar.f25716n;
        } else {
            bVar5 = bVar2;
        }
        if ((i10 & 16384) != 0) {
            bVar6 = cVar.f25717o;
        } else {
            bVar6 = bVar3;
        }
        return cVar.a(coroutineDispatcher5, coroutineDispatcher6, coroutineDispatcher7, coroutineDispatcher8, aVar2, eVar2, config2, z12, z13, drawable4, drawable5, drawable6, bVar4, bVar5, bVar6);
    }

    public final c a(CoroutineDispatcher coroutineDispatcher, CoroutineDispatcher coroutineDispatcher2, CoroutineDispatcher coroutineDispatcher3, CoroutineDispatcher coroutineDispatcher4, c.a aVar, h5.e eVar, Bitmap.Config config, boolean z10, boolean z11, Drawable drawable, Drawable drawable2, Drawable drawable3, b bVar, b bVar2, b bVar3) {
        return new c(coroutineDispatcher, coroutineDispatcher2, coroutineDispatcher3, coroutineDispatcher4, aVar, eVar, config, z10, z11, drawable, drawable2, drawable3, bVar, bVar2, bVar3);
    }

    public final boolean c() {
        return this.f25710h;
    }

    public final boolean d() {
        return this.f25711i;
    }

    public final Bitmap.Config e() {
        return this.f25709g;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c) {
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f25703a, cVar.f25703a) && Intrinsics.areEqual(this.f25704b, cVar.f25704b) && Intrinsics.areEqual(this.f25705c, cVar.f25705c) && Intrinsics.areEqual(this.f25706d, cVar.f25706d) && Intrinsics.areEqual(this.f25707e, cVar.f25707e) && this.f25708f == cVar.f25708f && this.f25709g == cVar.f25709g && this.f25710h == cVar.f25710h && this.f25711i == cVar.f25711i && Intrinsics.areEqual(this.f25712j, cVar.f25712j) && Intrinsics.areEqual(this.f25713k, cVar.f25713k) && Intrinsics.areEqual(this.f25714l, cVar.f25714l) && this.f25715m == cVar.f25715m && this.f25716n == cVar.f25716n && this.f25717o == cVar.f25717o) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final CoroutineDispatcher f() {
        return this.f25705c;
    }

    public final b g() {
        return this.f25716n;
    }

    public final Drawable h() {
        return this.f25713k;
    }

    public int hashCode() {
        int i10;
        int i11;
        int hashCode = ((((((((((((((((this.f25703a.hashCode() * 31) + this.f25704b.hashCode()) * 31) + this.f25705c.hashCode()) * 31) + this.f25706d.hashCode()) * 31) + this.f25707e.hashCode()) * 31) + this.f25708f.hashCode()) * 31) + this.f25709g.hashCode()) * 31) + Boolean.hashCode(this.f25710h)) * 31) + Boolean.hashCode(this.f25711i)) * 31;
        Drawable drawable = this.f25712j;
        int i12 = 0;
        if (drawable != null) {
            i10 = drawable.hashCode();
        } else {
            i10 = 0;
        }
        int i13 = (hashCode + i10) * 31;
        Drawable drawable2 = this.f25713k;
        if (drawable2 != null) {
            i11 = drawable2.hashCode();
        } else {
            i11 = 0;
        }
        int i14 = (i13 + i11) * 31;
        Drawable drawable3 = this.f25714l;
        if (drawable3 != null) {
            i12 = drawable3.hashCode();
        }
        return ((((((i14 + i12) * 31) + this.f25715m.hashCode()) * 31) + this.f25716n.hashCode()) * 31) + this.f25717o.hashCode();
    }

    public final Drawable i() {
        return this.f25714l;
    }

    public final CoroutineDispatcher j() {
        return this.f25704b;
    }

    public final CoroutineDispatcher k() {
        return this.f25703a;
    }

    public final b l() {
        return this.f25715m;
    }

    public final b m() {
        return this.f25717o;
    }

    public final Drawable n() {
        return this.f25712j;
    }

    public final h5.e o() {
        return this.f25708f;
    }

    public final CoroutineDispatcher p() {
        return this.f25706d;
    }

    public final c.a q() {
        return this.f25707e;
    }

    public /* synthetic */ c(CoroutineDispatcher coroutineDispatcher, CoroutineDispatcher coroutineDispatcher2, CoroutineDispatcher coroutineDispatcher3, CoroutineDispatcher coroutineDispatcher4, c.a aVar, h5.e eVar, Bitmap.Config config, boolean z10, boolean z11, Drawable drawable, Drawable drawable2, Drawable drawable3, b bVar, b bVar2, b bVar3, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? m0.c().f2() : coroutineDispatcher, (i10 & 2) != 0 ? m0.b() : coroutineDispatcher2, (i10 & 4) != 0 ? m0.b() : coroutineDispatcher3, (i10 & 8) != 0 ? m0.b() : coroutineDispatcher4, (i10 & 16) != 0 ? c.a.f31860b : aVar, (i10 & 32) != 0 ? h5.e.f27347i : eVar, (i10 & 64) != 0 ? k5.k.f() : config, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? true : z10, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? false : z11, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : drawable, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : drawable2, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 0 ? drawable3 : null, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? b.f25695i : bVar, (i10 & 8192) != 0 ? b.f25695i : bVar2, (i10 & 16384) != 0 ? b.f25695i : bVar3);
    }
}

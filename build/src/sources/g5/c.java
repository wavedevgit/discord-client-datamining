package g5;

import android.graphics.Bitmap;
import android.graphics.drawable.Drawable;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import j5.c;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineDispatcher;
import os.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c {

    /* renamed from: a */
    private final CoroutineDispatcher f23947a;

    /* renamed from: b */
    private final CoroutineDispatcher f23948b;

    /* renamed from: c */
    private final CoroutineDispatcher f23949c;

    /* renamed from: d */
    private final CoroutineDispatcher f23950d;

    /* renamed from: e */
    private final c.a f23951e;

    /* renamed from: f */
    private final h5.e f23952f;

    /* renamed from: g */
    private final Bitmap.Config f23953g;

    /* renamed from: h */
    private final boolean f23954h;

    /* renamed from: i */
    private final boolean f23955i;

    /* renamed from: j */
    private final Drawable f23956j;

    /* renamed from: k */
    private final Drawable f23957k;

    /* renamed from: l */
    private final Drawable f23958l;

    /* renamed from: m */
    private final b f23959m;

    /* renamed from: n */
    private final b f23960n;

    /* renamed from: o */
    private final b f23961o;

    public c(CoroutineDispatcher coroutineDispatcher, CoroutineDispatcher coroutineDispatcher2, CoroutineDispatcher coroutineDispatcher3, CoroutineDispatcher coroutineDispatcher4, c.a aVar, h5.e eVar, Bitmap.Config config, boolean z10, boolean z11, Drawable drawable, Drawable drawable2, Drawable drawable3, b bVar, b bVar2, b bVar3) {
        this.f23947a = coroutineDispatcher;
        this.f23948b = coroutineDispatcher2;
        this.f23949c = coroutineDispatcher3;
        this.f23950d = coroutineDispatcher4;
        this.f23951e = aVar;
        this.f23952f = eVar;
        this.f23953g = config;
        this.f23954h = z10;
        this.f23955i = z11;
        this.f23956j = drawable;
        this.f23957k = drawable2;
        this.f23958l = drawable3;
        this.f23959m = bVar;
        this.f23960n = bVar2;
        this.f23961o = bVar3;
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
            coroutineDispatcher5 = cVar.f23947a;
        } else {
            coroutineDispatcher5 = coroutineDispatcher;
        }
        if ((i10 & 2) != 0) {
            coroutineDispatcher6 = cVar.f23948b;
        } else {
            coroutineDispatcher6 = coroutineDispatcher2;
        }
        if ((i10 & 4) != 0) {
            coroutineDispatcher7 = cVar.f23949c;
        } else {
            coroutineDispatcher7 = coroutineDispatcher3;
        }
        if ((i10 & 8) != 0) {
            coroutineDispatcher8 = cVar.f23950d;
        } else {
            coroutineDispatcher8 = coroutineDispatcher4;
        }
        if ((i10 & 16) != 0) {
            aVar2 = cVar.f23951e;
        } else {
            aVar2 = aVar;
        }
        if ((i10 & 32) != 0) {
            eVar2 = cVar.f23952f;
        } else {
            eVar2 = eVar;
        }
        if ((i10 & 64) != 0) {
            config2 = cVar.f23953g;
        } else {
            config2 = config;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            z12 = cVar.f23954h;
        } else {
            z12 = z10;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            z13 = cVar.f23955i;
        } else {
            z13 = z11;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
            drawable4 = cVar.f23956j;
        } else {
            drawable4 = drawable;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
            drawable5 = cVar.f23957k;
        } else {
            drawable5 = drawable2;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
            drawable6 = cVar.f23958l;
        } else {
            drawable6 = drawable3;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
            bVar4 = cVar.f23959m;
        } else {
            bVar4 = bVar;
        }
        if ((i10 & 8192) != 0) {
            bVar5 = cVar.f23960n;
        } else {
            bVar5 = bVar2;
        }
        if ((i10 & 16384) != 0) {
            bVar6 = cVar.f23961o;
        } else {
            bVar6 = bVar3;
        }
        return cVar.a(coroutineDispatcher5, coroutineDispatcher6, coroutineDispatcher7, coroutineDispatcher8, aVar2, eVar2, config2, z12, z13, drawable4, drawable5, drawable6, bVar4, bVar5, bVar6);
    }

    public final c a(CoroutineDispatcher coroutineDispatcher, CoroutineDispatcher coroutineDispatcher2, CoroutineDispatcher coroutineDispatcher3, CoroutineDispatcher coroutineDispatcher4, c.a aVar, h5.e eVar, Bitmap.Config config, boolean z10, boolean z11, Drawable drawable, Drawable drawable2, Drawable drawable3, b bVar, b bVar2, b bVar3) {
        return new c(coroutineDispatcher, coroutineDispatcher2, coroutineDispatcher3, coroutineDispatcher4, aVar, eVar, config, z10, z11, drawable, drawable2, drawable3, bVar, bVar2, bVar3);
    }

    public final boolean c() {
        return this.f23954h;
    }

    public final boolean d() {
        return this.f23955i;
    }

    public final Bitmap.Config e() {
        return this.f23953g;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c) {
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f23947a, cVar.f23947a) && Intrinsics.areEqual(this.f23948b, cVar.f23948b) && Intrinsics.areEqual(this.f23949c, cVar.f23949c) && Intrinsics.areEqual(this.f23950d, cVar.f23950d) && Intrinsics.areEqual(this.f23951e, cVar.f23951e) && this.f23952f == cVar.f23952f && this.f23953g == cVar.f23953g && this.f23954h == cVar.f23954h && this.f23955i == cVar.f23955i && Intrinsics.areEqual(this.f23956j, cVar.f23956j) && Intrinsics.areEqual(this.f23957k, cVar.f23957k) && Intrinsics.areEqual(this.f23958l, cVar.f23958l) && this.f23959m == cVar.f23959m && this.f23960n == cVar.f23960n && this.f23961o == cVar.f23961o) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final CoroutineDispatcher f() {
        return this.f23949c;
    }

    public final b g() {
        return this.f23960n;
    }

    public final Drawable h() {
        return this.f23957k;
    }

    public int hashCode() {
        int i10;
        int i11;
        int hashCode = ((((((((((((((((this.f23947a.hashCode() * 31) + this.f23948b.hashCode()) * 31) + this.f23949c.hashCode()) * 31) + this.f23950d.hashCode()) * 31) + this.f23951e.hashCode()) * 31) + this.f23952f.hashCode()) * 31) + this.f23953g.hashCode()) * 31) + Boolean.hashCode(this.f23954h)) * 31) + Boolean.hashCode(this.f23955i)) * 31;
        Drawable drawable = this.f23956j;
        int i12 = 0;
        if (drawable != null) {
            i10 = drawable.hashCode();
        } else {
            i10 = 0;
        }
        int i13 = (hashCode + i10) * 31;
        Drawable drawable2 = this.f23957k;
        if (drawable2 != null) {
            i11 = drawable2.hashCode();
        } else {
            i11 = 0;
        }
        int i14 = (i13 + i11) * 31;
        Drawable drawable3 = this.f23958l;
        if (drawable3 != null) {
            i12 = drawable3.hashCode();
        }
        return ((((((i14 + i12) * 31) + this.f23959m.hashCode()) * 31) + this.f23960n.hashCode()) * 31) + this.f23961o.hashCode();
    }

    public final Drawable i() {
        return this.f23958l;
    }

    public final CoroutineDispatcher j() {
        return this.f23948b;
    }

    public final CoroutineDispatcher k() {
        return this.f23947a;
    }

    public final b l() {
        return this.f23959m;
    }

    public final b m() {
        return this.f23961o;
    }

    public final Drawable n() {
        return this.f23956j;
    }

    public final h5.e o() {
        return this.f23952f;
    }

    public final CoroutineDispatcher p() {
        return this.f23950d;
    }

    public final c.a q() {
        return this.f23951e;
    }

    public /* synthetic */ c(CoroutineDispatcher coroutineDispatcher, CoroutineDispatcher coroutineDispatcher2, CoroutineDispatcher coroutineDispatcher3, CoroutineDispatcher coroutineDispatcher4, c.a aVar, h5.e eVar, Bitmap.Config config, boolean z10, boolean z11, Drawable drawable, Drawable drawable2, Drawable drawable3, b bVar, b bVar2, b bVar3, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? m0.c().f2() : coroutineDispatcher, (i10 & 2) != 0 ? m0.b() : coroutineDispatcher2, (i10 & 4) != 0 ? m0.b() : coroutineDispatcher3, (i10 & 8) != 0 ? m0.b() : coroutineDispatcher4, (i10 & 16) != 0 ? c.a.f29732b : aVar, (i10 & 32) != 0 ? h5.e.f25790i : eVar, (i10 & 64) != 0 ? k5.k.f() : config, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? true : z10, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? false : z11, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : drawable, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : drawable2, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 0 ? drawable3 : null, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? b.f23939i : bVar, (i10 & 8192) != 0 ? b.f23939i : bVar2, (i10 & 16384) != 0 ? b.f23939i : bVar3);
    }
}

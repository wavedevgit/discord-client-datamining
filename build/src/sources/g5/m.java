package g5;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.ColorSpace;
import android.os.Build;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.Headers;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final Context f24862a;

    /* renamed from: b  reason: collision with root package name */
    private final Bitmap.Config f24863b;

    /* renamed from: c  reason: collision with root package name */
    private final ColorSpace f24864c;

    /* renamed from: d  reason: collision with root package name */
    private final h5.i f24865d;

    /* renamed from: e  reason: collision with root package name */
    private final h5.h f24866e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f24867f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f24868g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f24869h;

    /* renamed from: i  reason: collision with root package name */
    private final String f24870i;

    /* renamed from: j  reason: collision with root package name */
    private final Headers f24871j;

    /* renamed from: k  reason: collision with root package name */
    private final s f24872k;

    /* renamed from: l  reason: collision with root package name */
    private final n f24873l;

    /* renamed from: m  reason: collision with root package name */
    private final b f24874m;

    /* renamed from: n  reason: collision with root package name */
    private final b f24875n;

    /* renamed from: o  reason: collision with root package name */
    private final b f24876o;

    public m(Context context, Bitmap.Config config, ColorSpace colorSpace, h5.i iVar, h5.h hVar, boolean z10, boolean z11, boolean z12, String str, Headers headers, s sVar, n nVar, b bVar, b bVar2, b bVar3) {
        this.f24862a = context;
        this.f24863b = config;
        this.f24864c = colorSpace;
        this.f24865d = iVar;
        this.f24866e = hVar;
        this.f24867f = z10;
        this.f24868g = z11;
        this.f24869h = z12;
        this.f24870i = str;
        this.f24871j = headers;
        this.f24872k = sVar;
        this.f24873l = nVar;
        this.f24874m = bVar;
        this.f24875n = bVar2;
        this.f24876o = bVar3;
    }

    public static /* synthetic */ m b(m mVar, Context context, Bitmap.Config config, ColorSpace colorSpace, h5.i iVar, h5.h hVar, boolean z10, boolean z11, boolean z12, String str, Headers headers, s sVar, n nVar, b bVar, b bVar2, b bVar3, int i10, Object obj) {
        Context context2;
        Bitmap.Config config2;
        ColorSpace colorSpace2;
        h5.i iVar2;
        h5.h hVar2;
        boolean z13;
        boolean z14;
        boolean z15;
        String str2;
        Headers headers2;
        s sVar2;
        n nVar2;
        b bVar4;
        b bVar5;
        b bVar6;
        if ((i10 & 1) != 0) {
            context2 = mVar.f24862a;
        } else {
            context2 = context;
        }
        if ((i10 & 2) != 0) {
            config2 = mVar.f24863b;
        } else {
            config2 = config;
        }
        if ((i10 & 4) != 0) {
            colorSpace2 = mVar.f24864c;
        } else {
            colorSpace2 = colorSpace;
        }
        if ((i10 & 8) != 0) {
            iVar2 = mVar.f24865d;
        } else {
            iVar2 = iVar;
        }
        if ((i10 & 16) != 0) {
            hVar2 = mVar.f24866e;
        } else {
            hVar2 = hVar;
        }
        if ((i10 & 32) != 0) {
            z13 = mVar.f24867f;
        } else {
            z13 = z10;
        }
        if ((i10 & 64) != 0) {
            z14 = mVar.f24868g;
        } else {
            z14 = z11;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            z15 = mVar.f24869h;
        } else {
            z15 = z12;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            str2 = mVar.f24870i;
        } else {
            str2 = str;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
            headers2 = mVar.f24871j;
        } else {
            headers2 = headers;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
            sVar2 = mVar.f24872k;
        } else {
            sVar2 = sVar;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
            nVar2 = mVar.f24873l;
        } else {
            nVar2 = nVar;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
            bVar4 = mVar.f24874m;
        } else {
            bVar4 = bVar;
        }
        if ((i10 & 8192) != 0) {
            bVar5 = mVar.f24875n;
        } else {
            bVar5 = bVar2;
        }
        if ((i10 & 16384) != 0) {
            bVar6 = mVar.f24876o;
        } else {
            bVar6 = bVar3;
        }
        return mVar.a(context2, config2, colorSpace2, iVar2, hVar2, z13, z14, z15, str2, headers2, sVar2, nVar2, bVar4, bVar5, bVar6);
    }

    public final m a(Context context, Bitmap.Config config, ColorSpace colorSpace, h5.i iVar, h5.h hVar, boolean z10, boolean z11, boolean z12, String str, Headers headers, s sVar, n nVar, b bVar, b bVar2, b bVar3) {
        return new m(context, config, colorSpace, iVar, hVar, z10, z11, z12, str, headers, sVar, nVar, bVar, bVar2, bVar3);
    }

    public final boolean c() {
        return this.f24867f;
    }

    public final boolean d() {
        return this.f24868g;
    }

    public final ColorSpace e() {
        return this.f24864c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof m) {
            m mVar = (m) obj;
            if (Intrinsics.areEqual(this.f24862a, mVar.f24862a) && this.f24863b == mVar.f24863b) {
                if ((Build.VERSION.SDK_INT < 26 || Intrinsics.areEqual(this.f24864c, mVar.f24864c)) && Intrinsics.areEqual(this.f24865d, mVar.f24865d) && this.f24866e == mVar.f24866e && this.f24867f == mVar.f24867f && this.f24868g == mVar.f24868g && this.f24869h == mVar.f24869h && Intrinsics.areEqual(this.f24870i, mVar.f24870i) && Intrinsics.areEqual(this.f24871j, mVar.f24871j) && Intrinsics.areEqual(this.f24872k, mVar.f24872k) && Intrinsics.areEqual(this.f24873l, mVar.f24873l) && this.f24874m == mVar.f24874m && this.f24875n == mVar.f24875n && this.f24876o == mVar.f24876o) {
                    return true;
                }
                return false;
            }
            return false;
        }
        return false;
    }

    public final Bitmap.Config f() {
        return this.f24863b;
    }

    public final Context g() {
        return this.f24862a;
    }

    public final String h() {
        return this.f24870i;
    }

    public int hashCode() {
        int i10;
        int hashCode = ((this.f24862a.hashCode() * 31) + this.f24863b.hashCode()) * 31;
        ColorSpace colorSpace = this.f24864c;
        int i11 = 0;
        if (colorSpace != null) {
            i10 = colorSpace.hashCode();
        } else {
            i10 = 0;
        }
        int hashCode2 = (((((((((((hashCode + i10) * 31) + this.f24865d.hashCode()) * 31) + this.f24866e.hashCode()) * 31) + Boolean.hashCode(this.f24867f)) * 31) + Boolean.hashCode(this.f24868g)) * 31) + Boolean.hashCode(this.f24869h)) * 31;
        String str = this.f24870i;
        if (str != null) {
            i11 = str.hashCode();
        }
        return ((((((((((((hashCode2 + i11) * 31) + this.f24871j.hashCode()) * 31) + this.f24872k.hashCode()) * 31) + this.f24873l.hashCode()) * 31) + this.f24874m.hashCode()) * 31) + this.f24875n.hashCode()) * 31) + this.f24876o.hashCode();
    }

    public final b i() {
        return this.f24875n;
    }

    public final Headers j() {
        return this.f24871j;
    }

    public final b k() {
        return this.f24876o;
    }

    public final n l() {
        return this.f24873l;
    }

    public final boolean m() {
        return this.f24869h;
    }

    public final h5.h n() {
        return this.f24866e;
    }

    public final h5.i o() {
        return this.f24865d;
    }

    public final s p() {
        return this.f24872k;
    }
}

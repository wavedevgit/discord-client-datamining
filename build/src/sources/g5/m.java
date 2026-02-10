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
    private final Context f24861a;

    /* renamed from: b  reason: collision with root package name */
    private final Bitmap.Config f24862b;

    /* renamed from: c  reason: collision with root package name */
    private final ColorSpace f24863c;

    /* renamed from: d  reason: collision with root package name */
    private final h5.i f24864d;

    /* renamed from: e  reason: collision with root package name */
    private final h5.h f24865e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f24866f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f24867g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f24868h;

    /* renamed from: i  reason: collision with root package name */
    private final String f24869i;

    /* renamed from: j  reason: collision with root package name */
    private final Headers f24870j;

    /* renamed from: k  reason: collision with root package name */
    private final s f24871k;

    /* renamed from: l  reason: collision with root package name */
    private final n f24872l;

    /* renamed from: m  reason: collision with root package name */
    private final b f24873m;

    /* renamed from: n  reason: collision with root package name */
    private final b f24874n;

    /* renamed from: o  reason: collision with root package name */
    private final b f24875o;

    public m(Context context, Bitmap.Config config, ColorSpace colorSpace, h5.i iVar, h5.h hVar, boolean z10, boolean z11, boolean z12, String str, Headers headers, s sVar, n nVar, b bVar, b bVar2, b bVar3) {
        this.f24861a = context;
        this.f24862b = config;
        this.f24863c = colorSpace;
        this.f24864d = iVar;
        this.f24865e = hVar;
        this.f24866f = z10;
        this.f24867g = z11;
        this.f24868h = z12;
        this.f24869i = str;
        this.f24870j = headers;
        this.f24871k = sVar;
        this.f24872l = nVar;
        this.f24873m = bVar;
        this.f24874n = bVar2;
        this.f24875o = bVar3;
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
            context2 = mVar.f24861a;
        } else {
            context2 = context;
        }
        if ((i10 & 2) != 0) {
            config2 = mVar.f24862b;
        } else {
            config2 = config;
        }
        if ((i10 & 4) != 0) {
            colorSpace2 = mVar.f24863c;
        } else {
            colorSpace2 = colorSpace;
        }
        if ((i10 & 8) != 0) {
            iVar2 = mVar.f24864d;
        } else {
            iVar2 = iVar;
        }
        if ((i10 & 16) != 0) {
            hVar2 = mVar.f24865e;
        } else {
            hVar2 = hVar;
        }
        if ((i10 & 32) != 0) {
            z13 = mVar.f24866f;
        } else {
            z13 = z10;
        }
        if ((i10 & 64) != 0) {
            z14 = mVar.f24867g;
        } else {
            z14 = z11;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            z15 = mVar.f24868h;
        } else {
            z15 = z12;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            str2 = mVar.f24869i;
        } else {
            str2 = str;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
            headers2 = mVar.f24870j;
        } else {
            headers2 = headers;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
            sVar2 = mVar.f24871k;
        } else {
            sVar2 = sVar;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
            nVar2 = mVar.f24872l;
        } else {
            nVar2 = nVar;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
            bVar4 = mVar.f24873m;
        } else {
            bVar4 = bVar;
        }
        if ((i10 & 8192) != 0) {
            bVar5 = mVar.f24874n;
        } else {
            bVar5 = bVar2;
        }
        if ((i10 & 16384) != 0) {
            bVar6 = mVar.f24875o;
        } else {
            bVar6 = bVar3;
        }
        return mVar.a(context2, config2, colorSpace2, iVar2, hVar2, z13, z14, z15, str2, headers2, sVar2, nVar2, bVar4, bVar5, bVar6);
    }

    public final m a(Context context, Bitmap.Config config, ColorSpace colorSpace, h5.i iVar, h5.h hVar, boolean z10, boolean z11, boolean z12, String str, Headers headers, s sVar, n nVar, b bVar, b bVar2, b bVar3) {
        return new m(context, config, colorSpace, iVar, hVar, z10, z11, z12, str, headers, sVar, nVar, bVar, bVar2, bVar3);
    }

    public final boolean c() {
        return this.f24866f;
    }

    public final boolean d() {
        return this.f24867g;
    }

    public final ColorSpace e() {
        return this.f24863c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof m) {
            m mVar = (m) obj;
            if (Intrinsics.areEqual(this.f24861a, mVar.f24861a) && this.f24862b == mVar.f24862b) {
                if ((Build.VERSION.SDK_INT < 26 || Intrinsics.areEqual(this.f24863c, mVar.f24863c)) && Intrinsics.areEqual(this.f24864d, mVar.f24864d) && this.f24865e == mVar.f24865e && this.f24866f == mVar.f24866f && this.f24867g == mVar.f24867g && this.f24868h == mVar.f24868h && Intrinsics.areEqual(this.f24869i, mVar.f24869i) && Intrinsics.areEqual(this.f24870j, mVar.f24870j) && Intrinsics.areEqual(this.f24871k, mVar.f24871k) && Intrinsics.areEqual(this.f24872l, mVar.f24872l) && this.f24873m == mVar.f24873m && this.f24874n == mVar.f24874n && this.f24875o == mVar.f24875o) {
                    return true;
                }
                return false;
            }
            return false;
        }
        return false;
    }

    public final Bitmap.Config f() {
        return this.f24862b;
    }

    public final Context g() {
        return this.f24861a;
    }

    public final String h() {
        return this.f24869i;
    }

    public int hashCode() {
        int i10;
        int hashCode = ((this.f24861a.hashCode() * 31) + this.f24862b.hashCode()) * 31;
        ColorSpace colorSpace = this.f24863c;
        int i11 = 0;
        if (colorSpace != null) {
            i10 = colorSpace.hashCode();
        } else {
            i10 = 0;
        }
        int hashCode2 = (((((((((((hashCode + i10) * 31) + this.f24864d.hashCode()) * 31) + this.f24865e.hashCode()) * 31) + Boolean.hashCode(this.f24866f)) * 31) + Boolean.hashCode(this.f24867g)) * 31) + Boolean.hashCode(this.f24868h)) * 31;
        String str = this.f24869i;
        if (str != null) {
            i11 = str.hashCode();
        }
        return ((((((((((((hashCode2 + i11) * 31) + this.f24870j.hashCode()) * 31) + this.f24871k.hashCode()) * 31) + this.f24872l.hashCode()) * 31) + this.f24873m.hashCode()) * 31) + this.f24874n.hashCode()) * 31) + this.f24875o.hashCode();
    }

    public final b i() {
        return this.f24874n;
    }

    public final Headers j() {
        return this.f24870j;
    }

    public final b k() {
        return this.f24875o;
    }

    public final n l() {
        return this.f24872l;
    }

    public final boolean m() {
        return this.f24868h;
    }

    public final h5.h n() {
        return this.f24865e;
    }

    public final h5.i o() {
        return this.f24864d;
    }

    public final s p() {
        return this.f24871k;
    }
}

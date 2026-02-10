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
    private final Context f23561a;

    /* renamed from: b  reason: collision with root package name */
    private final Bitmap.Config f23562b;

    /* renamed from: c  reason: collision with root package name */
    private final ColorSpace f23563c;

    /* renamed from: d  reason: collision with root package name */
    private final h5.i f23564d;

    /* renamed from: e  reason: collision with root package name */
    private final h5.h f23565e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f23566f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f23567g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f23568h;

    /* renamed from: i  reason: collision with root package name */
    private final String f23569i;

    /* renamed from: j  reason: collision with root package name */
    private final Headers f23570j;

    /* renamed from: k  reason: collision with root package name */
    private final s f23571k;

    /* renamed from: l  reason: collision with root package name */
    private final n f23572l;

    /* renamed from: m  reason: collision with root package name */
    private final b f23573m;

    /* renamed from: n  reason: collision with root package name */
    private final b f23574n;

    /* renamed from: o  reason: collision with root package name */
    private final b f23575o;

    public m(Context context, Bitmap.Config config, ColorSpace colorSpace, h5.i iVar, h5.h hVar, boolean z10, boolean z11, boolean z12, String str, Headers headers, s sVar, n nVar, b bVar, b bVar2, b bVar3) {
        this.f23561a = context;
        this.f23562b = config;
        this.f23563c = colorSpace;
        this.f23564d = iVar;
        this.f23565e = hVar;
        this.f23566f = z10;
        this.f23567g = z11;
        this.f23568h = z12;
        this.f23569i = str;
        this.f23570j = headers;
        this.f23571k = sVar;
        this.f23572l = nVar;
        this.f23573m = bVar;
        this.f23574n = bVar2;
        this.f23575o = bVar3;
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
            context2 = mVar.f23561a;
        } else {
            context2 = context;
        }
        if ((i10 & 2) != 0) {
            config2 = mVar.f23562b;
        } else {
            config2 = config;
        }
        if ((i10 & 4) != 0) {
            colorSpace2 = mVar.f23563c;
        } else {
            colorSpace2 = colorSpace;
        }
        if ((i10 & 8) != 0) {
            iVar2 = mVar.f23564d;
        } else {
            iVar2 = iVar;
        }
        if ((i10 & 16) != 0) {
            hVar2 = mVar.f23565e;
        } else {
            hVar2 = hVar;
        }
        if ((i10 & 32) != 0) {
            z13 = mVar.f23566f;
        } else {
            z13 = z10;
        }
        if ((i10 & 64) != 0) {
            z14 = mVar.f23567g;
        } else {
            z14 = z11;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            z15 = mVar.f23568h;
        } else {
            z15 = z12;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            str2 = mVar.f23569i;
        } else {
            str2 = str;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
            headers2 = mVar.f23570j;
        } else {
            headers2 = headers;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
            sVar2 = mVar.f23571k;
        } else {
            sVar2 = sVar;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
            nVar2 = mVar.f23572l;
        } else {
            nVar2 = nVar;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
            bVar4 = mVar.f23573m;
        } else {
            bVar4 = bVar;
        }
        if ((i10 & 8192) != 0) {
            bVar5 = mVar.f23574n;
        } else {
            bVar5 = bVar2;
        }
        if ((i10 & 16384) != 0) {
            bVar6 = mVar.f23575o;
        } else {
            bVar6 = bVar3;
        }
        return mVar.a(context2, config2, colorSpace2, iVar2, hVar2, z13, z14, z15, str2, headers2, sVar2, nVar2, bVar4, bVar5, bVar6);
    }

    public final m a(Context context, Bitmap.Config config, ColorSpace colorSpace, h5.i iVar, h5.h hVar, boolean z10, boolean z11, boolean z12, String str, Headers headers, s sVar, n nVar, b bVar, b bVar2, b bVar3) {
        return new m(context, config, colorSpace, iVar, hVar, z10, z11, z12, str, headers, sVar, nVar, bVar, bVar2, bVar3);
    }

    public final boolean c() {
        return this.f23566f;
    }

    public final boolean d() {
        return this.f23567g;
    }

    public final ColorSpace e() {
        return this.f23563c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof m) {
            m mVar = (m) obj;
            if (Intrinsics.areEqual(this.f23561a, mVar.f23561a) && this.f23562b == mVar.f23562b) {
                if ((Build.VERSION.SDK_INT < 26 || Intrinsics.areEqual(this.f23563c, mVar.f23563c)) && Intrinsics.areEqual(this.f23564d, mVar.f23564d) && this.f23565e == mVar.f23565e && this.f23566f == mVar.f23566f && this.f23567g == mVar.f23567g && this.f23568h == mVar.f23568h && Intrinsics.areEqual(this.f23569i, mVar.f23569i) && Intrinsics.areEqual(this.f23570j, mVar.f23570j) && Intrinsics.areEqual(this.f23571k, mVar.f23571k) && Intrinsics.areEqual(this.f23572l, mVar.f23572l) && this.f23573m == mVar.f23573m && this.f23574n == mVar.f23574n && this.f23575o == mVar.f23575o) {
                    return true;
                }
                return false;
            }
            return false;
        }
        return false;
    }

    public final Bitmap.Config f() {
        return this.f23562b;
    }

    public final Context g() {
        return this.f23561a;
    }

    public final String h() {
        return this.f23569i;
    }

    public int hashCode() {
        int i10;
        int hashCode = ((this.f23561a.hashCode() * 31) + this.f23562b.hashCode()) * 31;
        ColorSpace colorSpace = this.f23563c;
        int i11 = 0;
        if (colorSpace != null) {
            i10 = colorSpace.hashCode();
        } else {
            i10 = 0;
        }
        int hashCode2 = (((((((((((hashCode + i10) * 31) + this.f23564d.hashCode()) * 31) + this.f23565e.hashCode()) * 31) + Boolean.hashCode(this.f23566f)) * 31) + Boolean.hashCode(this.f23567g)) * 31) + Boolean.hashCode(this.f23568h)) * 31;
        String str = this.f23569i;
        if (str != null) {
            i11 = str.hashCode();
        }
        return ((((((((((((hashCode2 + i11) * 31) + this.f23570j.hashCode()) * 31) + this.f23571k.hashCode()) * 31) + this.f23572l.hashCode()) * 31) + this.f23573m.hashCode()) * 31) + this.f23574n.hashCode()) * 31) + this.f23575o.hashCode();
    }

    public final b i() {
        return this.f23574n;
    }

    public final Headers j() {
        return this.f23570j;
    }

    public final b k() {
        return this.f23575o;
    }

    public final n l() {
        return this.f23572l;
    }

    public final boolean m() {
        return this.f23568h;
    }

    public final h5.h n() {
        return this.f23565e;
    }

    public final h5.i o() {
        return this.f23564d;
    }

    public final s p() {
        return this.f23571k;
    }
}

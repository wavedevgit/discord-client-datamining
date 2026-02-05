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
    private final Context f23783a;

    /* renamed from: b  reason: collision with root package name */
    private final Bitmap.Config f23784b;

    /* renamed from: c  reason: collision with root package name */
    private final ColorSpace f23785c;

    /* renamed from: d  reason: collision with root package name */
    private final h5.i f23786d;

    /* renamed from: e  reason: collision with root package name */
    private final h5.h f23787e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f23788f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f23789g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f23790h;

    /* renamed from: i  reason: collision with root package name */
    private final String f23791i;

    /* renamed from: j  reason: collision with root package name */
    private final Headers f23792j;

    /* renamed from: k  reason: collision with root package name */
    private final s f23793k;

    /* renamed from: l  reason: collision with root package name */
    private final n f23794l;

    /* renamed from: m  reason: collision with root package name */
    private final b f23795m;

    /* renamed from: n  reason: collision with root package name */
    private final b f23796n;

    /* renamed from: o  reason: collision with root package name */
    private final b f23797o;

    public m(Context context, Bitmap.Config config, ColorSpace colorSpace, h5.i iVar, h5.h hVar, boolean z10, boolean z11, boolean z12, String str, Headers headers, s sVar, n nVar, b bVar, b bVar2, b bVar3) {
        this.f23783a = context;
        this.f23784b = config;
        this.f23785c = colorSpace;
        this.f23786d = iVar;
        this.f23787e = hVar;
        this.f23788f = z10;
        this.f23789g = z11;
        this.f23790h = z12;
        this.f23791i = str;
        this.f23792j = headers;
        this.f23793k = sVar;
        this.f23794l = nVar;
        this.f23795m = bVar;
        this.f23796n = bVar2;
        this.f23797o = bVar3;
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
            context2 = mVar.f23783a;
        } else {
            context2 = context;
        }
        if ((i10 & 2) != 0) {
            config2 = mVar.f23784b;
        } else {
            config2 = config;
        }
        if ((i10 & 4) != 0) {
            colorSpace2 = mVar.f23785c;
        } else {
            colorSpace2 = colorSpace;
        }
        if ((i10 & 8) != 0) {
            iVar2 = mVar.f23786d;
        } else {
            iVar2 = iVar;
        }
        if ((i10 & 16) != 0) {
            hVar2 = mVar.f23787e;
        } else {
            hVar2 = hVar;
        }
        if ((i10 & 32) != 0) {
            z13 = mVar.f23788f;
        } else {
            z13 = z10;
        }
        if ((i10 & 64) != 0) {
            z14 = mVar.f23789g;
        } else {
            z14 = z11;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            z15 = mVar.f23790h;
        } else {
            z15 = z12;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            str2 = mVar.f23791i;
        } else {
            str2 = str;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
            headers2 = mVar.f23792j;
        } else {
            headers2 = headers;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
            sVar2 = mVar.f23793k;
        } else {
            sVar2 = sVar;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
            nVar2 = mVar.f23794l;
        } else {
            nVar2 = nVar;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
            bVar4 = mVar.f23795m;
        } else {
            bVar4 = bVar;
        }
        if ((i10 & 8192) != 0) {
            bVar5 = mVar.f23796n;
        } else {
            bVar5 = bVar2;
        }
        if ((i10 & 16384) != 0) {
            bVar6 = mVar.f23797o;
        } else {
            bVar6 = bVar3;
        }
        return mVar.a(context2, config2, colorSpace2, iVar2, hVar2, z13, z14, z15, str2, headers2, sVar2, nVar2, bVar4, bVar5, bVar6);
    }

    public final m a(Context context, Bitmap.Config config, ColorSpace colorSpace, h5.i iVar, h5.h hVar, boolean z10, boolean z11, boolean z12, String str, Headers headers, s sVar, n nVar, b bVar, b bVar2, b bVar3) {
        return new m(context, config, colorSpace, iVar, hVar, z10, z11, z12, str, headers, sVar, nVar, bVar, bVar2, bVar3);
    }

    public final boolean c() {
        return this.f23788f;
    }

    public final boolean d() {
        return this.f23789g;
    }

    public final ColorSpace e() {
        return this.f23785c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof m) {
            m mVar = (m) obj;
            if (Intrinsics.areEqual(this.f23783a, mVar.f23783a) && this.f23784b == mVar.f23784b) {
                if ((Build.VERSION.SDK_INT < 26 || Intrinsics.areEqual(this.f23785c, mVar.f23785c)) && Intrinsics.areEqual(this.f23786d, mVar.f23786d) && this.f23787e == mVar.f23787e && this.f23788f == mVar.f23788f && this.f23789g == mVar.f23789g && this.f23790h == mVar.f23790h && Intrinsics.areEqual(this.f23791i, mVar.f23791i) && Intrinsics.areEqual(this.f23792j, mVar.f23792j) && Intrinsics.areEqual(this.f23793k, mVar.f23793k) && Intrinsics.areEqual(this.f23794l, mVar.f23794l) && this.f23795m == mVar.f23795m && this.f23796n == mVar.f23796n && this.f23797o == mVar.f23797o) {
                    return true;
                }
                return false;
            }
            return false;
        }
        return false;
    }

    public final Bitmap.Config f() {
        return this.f23784b;
    }

    public final Context g() {
        return this.f23783a;
    }

    public final String h() {
        return this.f23791i;
    }

    public int hashCode() {
        int i10;
        int hashCode = ((this.f23783a.hashCode() * 31) + this.f23784b.hashCode()) * 31;
        ColorSpace colorSpace = this.f23785c;
        int i11 = 0;
        if (colorSpace != null) {
            i10 = colorSpace.hashCode();
        } else {
            i10 = 0;
        }
        int hashCode2 = (((((((((((hashCode + i10) * 31) + this.f23786d.hashCode()) * 31) + this.f23787e.hashCode()) * 31) + Boolean.hashCode(this.f23788f)) * 31) + Boolean.hashCode(this.f23789g)) * 31) + Boolean.hashCode(this.f23790h)) * 31;
        String str = this.f23791i;
        if (str != null) {
            i11 = str.hashCode();
        }
        return ((((((((((((hashCode2 + i11) * 31) + this.f23792j.hashCode()) * 31) + this.f23793k.hashCode()) * 31) + this.f23794l.hashCode()) * 31) + this.f23795m.hashCode()) * 31) + this.f23796n.hashCode()) * 31) + this.f23797o.hashCode();
    }

    public final b i() {
        return this.f23796n;
    }

    public final Headers j() {
        return this.f23792j;
    }

    public final b k() {
        return this.f23797o;
    }

    public final n l() {
        return this.f23794l;
    }

    public final boolean m() {
        return this.f23790h;
    }

    public final h5.h n() {
        return this.f23787e;
    }

    public final h5.i o() {
        return this.f23786d;
    }

    public final s p() {
        return this.f23793k;
    }
}

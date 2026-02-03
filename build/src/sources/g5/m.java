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
    private final Context f25084a;

    /* renamed from: b  reason: collision with root package name */
    private final Bitmap.Config f25085b;

    /* renamed from: c  reason: collision with root package name */
    private final ColorSpace f25086c;

    /* renamed from: d  reason: collision with root package name */
    private final h5.i f25087d;

    /* renamed from: e  reason: collision with root package name */
    private final h5.h f25088e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f25089f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f25090g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f25091h;

    /* renamed from: i  reason: collision with root package name */
    private final String f25092i;

    /* renamed from: j  reason: collision with root package name */
    private final Headers f25093j;

    /* renamed from: k  reason: collision with root package name */
    private final s f25094k;

    /* renamed from: l  reason: collision with root package name */
    private final n f25095l;

    /* renamed from: m  reason: collision with root package name */
    private final b f25096m;

    /* renamed from: n  reason: collision with root package name */
    private final b f25097n;

    /* renamed from: o  reason: collision with root package name */
    private final b f25098o;

    public m(Context context, Bitmap.Config config, ColorSpace colorSpace, h5.i iVar, h5.h hVar, boolean z10, boolean z11, boolean z12, String str, Headers headers, s sVar, n nVar, b bVar, b bVar2, b bVar3) {
        this.f25084a = context;
        this.f25085b = config;
        this.f25086c = colorSpace;
        this.f25087d = iVar;
        this.f25088e = hVar;
        this.f25089f = z10;
        this.f25090g = z11;
        this.f25091h = z12;
        this.f25092i = str;
        this.f25093j = headers;
        this.f25094k = sVar;
        this.f25095l = nVar;
        this.f25096m = bVar;
        this.f25097n = bVar2;
        this.f25098o = bVar3;
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
            context2 = mVar.f25084a;
        } else {
            context2 = context;
        }
        if ((i10 & 2) != 0) {
            config2 = mVar.f25085b;
        } else {
            config2 = config;
        }
        if ((i10 & 4) != 0) {
            colorSpace2 = mVar.f25086c;
        } else {
            colorSpace2 = colorSpace;
        }
        if ((i10 & 8) != 0) {
            iVar2 = mVar.f25087d;
        } else {
            iVar2 = iVar;
        }
        if ((i10 & 16) != 0) {
            hVar2 = mVar.f25088e;
        } else {
            hVar2 = hVar;
        }
        if ((i10 & 32) != 0) {
            z13 = mVar.f25089f;
        } else {
            z13 = z10;
        }
        if ((i10 & 64) != 0) {
            z14 = mVar.f25090g;
        } else {
            z14 = z11;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            z15 = mVar.f25091h;
        } else {
            z15 = z12;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            str2 = mVar.f25092i;
        } else {
            str2 = str;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
            headers2 = mVar.f25093j;
        } else {
            headers2 = headers;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
            sVar2 = mVar.f25094k;
        } else {
            sVar2 = sVar;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
            nVar2 = mVar.f25095l;
        } else {
            nVar2 = nVar;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
            bVar4 = mVar.f25096m;
        } else {
            bVar4 = bVar;
        }
        if ((i10 & 8192) != 0) {
            bVar5 = mVar.f25097n;
        } else {
            bVar5 = bVar2;
        }
        if ((i10 & 16384) != 0) {
            bVar6 = mVar.f25098o;
        } else {
            bVar6 = bVar3;
        }
        return mVar.a(context2, config2, colorSpace2, iVar2, hVar2, z13, z14, z15, str2, headers2, sVar2, nVar2, bVar4, bVar5, bVar6);
    }

    public final m a(Context context, Bitmap.Config config, ColorSpace colorSpace, h5.i iVar, h5.h hVar, boolean z10, boolean z11, boolean z12, String str, Headers headers, s sVar, n nVar, b bVar, b bVar2, b bVar3) {
        return new m(context, config, colorSpace, iVar, hVar, z10, z11, z12, str, headers, sVar, nVar, bVar, bVar2, bVar3);
    }

    public final boolean c() {
        return this.f25089f;
    }

    public final boolean d() {
        return this.f25090g;
    }

    public final ColorSpace e() {
        return this.f25086c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof m) {
            m mVar = (m) obj;
            if (Intrinsics.areEqual(this.f25084a, mVar.f25084a) && this.f25085b == mVar.f25085b) {
                if ((Build.VERSION.SDK_INT < 26 || Intrinsics.areEqual(this.f25086c, mVar.f25086c)) && Intrinsics.areEqual(this.f25087d, mVar.f25087d) && this.f25088e == mVar.f25088e && this.f25089f == mVar.f25089f && this.f25090g == mVar.f25090g && this.f25091h == mVar.f25091h && Intrinsics.areEqual(this.f25092i, mVar.f25092i) && Intrinsics.areEqual(this.f25093j, mVar.f25093j) && Intrinsics.areEqual(this.f25094k, mVar.f25094k) && Intrinsics.areEqual(this.f25095l, mVar.f25095l) && this.f25096m == mVar.f25096m && this.f25097n == mVar.f25097n && this.f25098o == mVar.f25098o) {
                    return true;
                }
                return false;
            }
            return false;
        }
        return false;
    }

    public final Bitmap.Config f() {
        return this.f25085b;
    }

    public final Context g() {
        return this.f25084a;
    }

    public final String h() {
        return this.f25092i;
    }

    public int hashCode() {
        int i10;
        int hashCode = ((this.f25084a.hashCode() * 31) + this.f25085b.hashCode()) * 31;
        ColorSpace colorSpace = this.f25086c;
        int i11 = 0;
        if (colorSpace != null) {
            i10 = colorSpace.hashCode();
        } else {
            i10 = 0;
        }
        int hashCode2 = (((((((((((hashCode + i10) * 31) + this.f25087d.hashCode()) * 31) + this.f25088e.hashCode()) * 31) + Boolean.hashCode(this.f25089f)) * 31) + Boolean.hashCode(this.f25090g)) * 31) + Boolean.hashCode(this.f25091h)) * 31;
        String str = this.f25092i;
        if (str != null) {
            i11 = str.hashCode();
        }
        return ((((((((((((hashCode2 + i11) * 31) + this.f25093j.hashCode()) * 31) + this.f25094k.hashCode()) * 31) + this.f25095l.hashCode()) * 31) + this.f25096m.hashCode()) * 31) + this.f25097n.hashCode()) * 31) + this.f25098o.hashCode();
    }

    public final b i() {
        return this.f25097n;
    }

    public final Headers j() {
        return this.f25093j;
    }

    public final b k() {
        return this.f25098o;
    }

    public final n l() {
        return this.f25095l;
    }

    public final boolean m() {
        return this.f25091h;
    }

    public final h5.h n() {
        return this.f25088e;
    }

    public final h5.i o() {
        return this.f25087d;
    }

    public final s p() {
        return this.f25094k;
    }
}

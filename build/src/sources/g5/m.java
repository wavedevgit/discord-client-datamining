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
    private final Context f25887a;

    /* renamed from: b  reason: collision with root package name */
    private final Bitmap.Config f25888b;

    /* renamed from: c  reason: collision with root package name */
    private final ColorSpace f25889c;

    /* renamed from: d  reason: collision with root package name */
    private final h5.i f25890d;

    /* renamed from: e  reason: collision with root package name */
    private final h5.h f25891e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f25892f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f25893g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f25894h;

    /* renamed from: i  reason: collision with root package name */
    private final String f25895i;

    /* renamed from: j  reason: collision with root package name */
    private final Headers f25896j;

    /* renamed from: k  reason: collision with root package name */
    private final s f25897k;

    /* renamed from: l  reason: collision with root package name */
    private final n f25898l;

    /* renamed from: m  reason: collision with root package name */
    private final b f25899m;

    /* renamed from: n  reason: collision with root package name */
    private final b f25900n;

    /* renamed from: o  reason: collision with root package name */
    private final b f25901o;

    public m(Context context, Bitmap.Config config, ColorSpace colorSpace, h5.i iVar, h5.h hVar, boolean z10, boolean z11, boolean z12, String str, Headers headers, s sVar, n nVar, b bVar, b bVar2, b bVar3) {
        this.f25887a = context;
        this.f25888b = config;
        this.f25889c = colorSpace;
        this.f25890d = iVar;
        this.f25891e = hVar;
        this.f25892f = z10;
        this.f25893g = z11;
        this.f25894h = z12;
        this.f25895i = str;
        this.f25896j = headers;
        this.f25897k = sVar;
        this.f25898l = nVar;
        this.f25899m = bVar;
        this.f25900n = bVar2;
        this.f25901o = bVar3;
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
            context2 = mVar.f25887a;
        } else {
            context2 = context;
        }
        if ((i10 & 2) != 0) {
            config2 = mVar.f25888b;
        } else {
            config2 = config;
        }
        if ((i10 & 4) != 0) {
            colorSpace2 = mVar.f25889c;
        } else {
            colorSpace2 = colorSpace;
        }
        if ((i10 & 8) != 0) {
            iVar2 = mVar.f25890d;
        } else {
            iVar2 = iVar;
        }
        if ((i10 & 16) != 0) {
            hVar2 = mVar.f25891e;
        } else {
            hVar2 = hVar;
        }
        if ((i10 & 32) != 0) {
            z13 = mVar.f25892f;
        } else {
            z13 = z10;
        }
        if ((i10 & 64) != 0) {
            z14 = mVar.f25893g;
        } else {
            z14 = z11;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            z15 = mVar.f25894h;
        } else {
            z15 = z12;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            str2 = mVar.f25895i;
        } else {
            str2 = str;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
            headers2 = mVar.f25896j;
        } else {
            headers2 = headers;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
            sVar2 = mVar.f25897k;
        } else {
            sVar2 = sVar;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
            nVar2 = mVar.f25898l;
        } else {
            nVar2 = nVar;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
            bVar4 = mVar.f25899m;
        } else {
            bVar4 = bVar;
        }
        if ((i10 & 8192) != 0) {
            bVar5 = mVar.f25900n;
        } else {
            bVar5 = bVar2;
        }
        if ((i10 & 16384) != 0) {
            bVar6 = mVar.f25901o;
        } else {
            bVar6 = bVar3;
        }
        return mVar.a(context2, config2, colorSpace2, iVar2, hVar2, z13, z14, z15, str2, headers2, sVar2, nVar2, bVar4, bVar5, bVar6);
    }

    public final m a(Context context, Bitmap.Config config, ColorSpace colorSpace, h5.i iVar, h5.h hVar, boolean z10, boolean z11, boolean z12, String str, Headers headers, s sVar, n nVar, b bVar, b bVar2, b bVar3) {
        return new m(context, config, colorSpace, iVar, hVar, z10, z11, z12, str, headers, sVar, nVar, bVar, bVar2, bVar3);
    }

    public final boolean c() {
        return this.f25892f;
    }

    public final boolean d() {
        return this.f25893g;
    }

    public final ColorSpace e() {
        return this.f25889c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof m) {
            m mVar = (m) obj;
            if (Intrinsics.areEqual(this.f25887a, mVar.f25887a) && this.f25888b == mVar.f25888b) {
                if ((Build.VERSION.SDK_INT < 26 || Intrinsics.areEqual(this.f25889c, mVar.f25889c)) && Intrinsics.areEqual(this.f25890d, mVar.f25890d) && this.f25891e == mVar.f25891e && this.f25892f == mVar.f25892f && this.f25893g == mVar.f25893g && this.f25894h == mVar.f25894h && Intrinsics.areEqual(this.f25895i, mVar.f25895i) && Intrinsics.areEqual(this.f25896j, mVar.f25896j) && Intrinsics.areEqual(this.f25897k, mVar.f25897k) && Intrinsics.areEqual(this.f25898l, mVar.f25898l) && this.f25899m == mVar.f25899m && this.f25900n == mVar.f25900n && this.f25901o == mVar.f25901o) {
                    return true;
                }
                return false;
            }
            return false;
        }
        return false;
    }

    public final Bitmap.Config f() {
        return this.f25888b;
    }

    public final Context g() {
        return this.f25887a;
    }

    public final String h() {
        return this.f25895i;
    }

    public int hashCode() {
        int i10;
        int hashCode = ((this.f25887a.hashCode() * 31) + this.f25888b.hashCode()) * 31;
        ColorSpace colorSpace = this.f25889c;
        int i11 = 0;
        if (colorSpace != null) {
            i10 = colorSpace.hashCode();
        } else {
            i10 = 0;
        }
        int hashCode2 = (((((((((((hashCode + i10) * 31) + this.f25890d.hashCode()) * 31) + this.f25891e.hashCode()) * 31) + Boolean.hashCode(this.f25892f)) * 31) + Boolean.hashCode(this.f25893g)) * 31) + Boolean.hashCode(this.f25894h)) * 31;
        String str = this.f25895i;
        if (str != null) {
            i11 = str.hashCode();
        }
        return ((((((((((((hashCode2 + i11) * 31) + this.f25896j.hashCode()) * 31) + this.f25897k.hashCode()) * 31) + this.f25898l.hashCode()) * 31) + this.f25899m.hashCode()) * 31) + this.f25900n.hashCode()) * 31) + this.f25901o.hashCode();
    }

    public final b i() {
        return this.f25900n;
    }

    public final Headers j() {
        return this.f25896j;
    }

    public final b k() {
        return this.f25901o;
    }

    public final n l() {
        return this.f25898l;
    }

    public final boolean m() {
        return this.f25894h;
    }

    public final h5.h n() {
        return this.f25891e;
    }

    public final h5.i o() {
        return this.f25890d;
    }

    public final s p() {
        return this.f25897k;
    }
}

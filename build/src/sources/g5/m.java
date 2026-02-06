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
    private final Context f24036a;

    /* renamed from: b  reason: collision with root package name */
    private final Bitmap.Config f24037b;

    /* renamed from: c  reason: collision with root package name */
    private final ColorSpace f24038c;

    /* renamed from: d  reason: collision with root package name */
    private final h5.i f24039d;

    /* renamed from: e  reason: collision with root package name */
    private final h5.h f24040e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f24041f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f24042g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f24043h;

    /* renamed from: i  reason: collision with root package name */
    private final String f24044i;

    /* renamed from: j  reason: collision with root package name */
    private final Headers f24045j;

    /* renamed from: k  reason: collision with root package name */
    private final s f24046k;

    /* renamed from: l  reason: collision with root package name */
    private final n f24047l;

    /* renamed from: m  reason: collision with root package name */
    private final b f24048m;

    /* renamed from: n  reason: collision with root package name */
    private final b f24049n;

    /* renamed from: o  reason: collision with root package name */
    private final b f24050o;

    public m(Context context, Bitmap.Config config, ColorSpace colorSpace, h5.i iVar, h5.h hVar, boolean z10, boolean z11, boolean z12, String str, Headers headers, s sVar, n nVar, b bVar, b bVar2, b bVar3) {
        this.f24036a = context;
        this.f24037b = config;
        this.f24038c = colorSpace;
        this.f24039d = iVar;
        this.f24040e = hVar;
        this.f24041f = z10;
        this.f24042g = z11;
        this.f24043h = z12;
        this.f24044i = str;
        this.f24045j = headers;
        this.f24046k = sVar;
        this.f24047l = nVar;
        this.f24048m = bVar;
        this.f24049n = bVar2;
        this.f24050o = bVar3;
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
            context2 = mVar.f24036a;
        } else {
            context2 = context;
        }
        if ((i10 & 2) != 0) {
            config2 = mVar.f24037b;
        } else {
            config2 = config;
        }
        if ((i10 & 4) != 0) {
            colorSpace2 = mVar.f24038c;
        } else {
            colorSpace2 = colorSpace;
        }
        if ((i10 & 8) != 0) {
            iVar2 = mVar.f24039d;
        } else {
            iVar2 = iVar;
        }
        if ((i10 & 16) != 0) {
            hVar2 = mVar.f24040e;
        } else {
            hVar2 = hVar;
        }
        if ((i10 & 32) != 0) {
            z13 = mVar.f24041f;
        } else {
            z13 = z10;
        }
        if ((i10 & 64) != 0) {
            z14 = mVar.f24042g;
        } else {
            z14 = z11;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            z15 = mVar.f24043h;
        } else {
            z15 = z12;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            str2 = mVar.f24044i;
        } else {
            str2 = str;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
            headers2 = mVar.f24045j;
        } else {
            headers2 = headers;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
            sVar2 = mVar.f24046k;
        } else {
            sVar2 = sVar;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
            nVar2 = mVar.f24047l;
        } else {
            nVar2 = nVar;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
            bVar4 = mVar.f24048m;
        } else {
            bVar4 = bVar;
        }
        if ((i10 & 8192) != 0) {
            bVar5 = mVar.f24049n;
        } else {
            bVar5 = bVar2;
        }
        if ((i10 & 16384) != 0) {
            bVar6 = mVar.f24050o;
        } else {
            bVar6 = bVar3;
        }
        return mVar.a(context2, config2, colorSpace2, iVar2, hVar2, z13, z14, z15, str2, headers2, sVar2, nVar2, bVar4, bVar5, bVar6);
    }

    public final m a(Context context, Bitmap.Config config, ColorSpace colorSpace, h5.i iVar, h5.h hVar, boolean z10, boolean z11, boolean z12, String str, Headers headers, s sVar, n nVar, b bVar, b bVar2, b bVar3) {
        return new m(context, config, colorSpace, iVar, hVar, z10, z11, z12, str, headers, sVar, nVar, bVar, bVar2, bVar3);
    }

    public final boolean c() {
        return this.f24041f;
    }

    public final boolean d() {
        return this.f24042g;
    }

    public final ColorSpace e() {
        return this.f24038c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof m) {
            m mVar = (m) obj;
            if (Intrinsics.areEqual(this.f24036a, mVar.f24036a) && this.f24037b == mVar.f24037b) {
                if ((Build.VERSION.SDK_INT < 26 || Intrinsics.areEqual(this.f24038c, mVar.f24038c)) && Intrinsics.areEqual(this.f24039d, mVar.f24039d) && this.f24040e == mVar.f24040e && this.f24041f == mVar.f24041f && this.f24042g == mVar.f24042g && this.f24043h == mVar.f24043h && Intrinsics.areEqual(this.f24044i, mVar.f24044i) && Intrinsics.areEqual(this.f24045j, mVar.f24045j) && Intrinsics.areEqual(this.f24046k, mVar.f24046k) && Intrinsics.areEqual(this.f24047l, mVar.f24047l) && this.f24048m == mVar.f24048m && this.f24049n == mVar.f24049n && this.f24050o == mVar.f24050o) {
                    return true;
                }
                return false;
            }
            return false;
        }
        return false;
    }

    public final Bitmap.Config f() {
        return this.f24037b;
    }

    public final Context g() {
        return this.f24036a;
    }

    public final String h() {
        return this.f24044i;
    }

    public int hashCode() {
        int i10;
        int hashCode = ((this.f24036a.hashCode() * 31) + this.f24037b.hashCode()) * 31;
        ColorSpace colorSpace = this.f24038c;
        int i11 = 0;
        if (colorSpace != null) {
            i10 = colorSpace.hashCode();
        } else {
            i10 = 0;
        }
        int hashCode2 = (((((((((((hashCode + i10) * 31) + this.f24039d.hashCode()) * 31) + this.f24040e.hashCode()) * 31) + Boolean.hashCode(this.f24041f)) * 31) + Boolean.hashCode(this.f24042g)) * 31) + Boolean.hashCode(this.f24043h)) * 31;
        String str = this.f24044i;
        if (str != null) {
            i11 = str.hashCode();
        }
        return ((((((((((((hashCode2 + i11) * 31) + this.f24045j.hashCode()) * 31) + this.f24046k.hashCode()) * 31) + this.f24047l.hashCode()) * 31) + this.f24048m.hashCode()) * 31) + this.f24049n.hashCode()) * 31) + this.f24050o.hashCode();
    }

    public final b i() {
        return this.f24049n;
    }

    public final Headers j() {
        return this.f24045j;
    }

    public final b k() {
        return this.f24050o;
    }

    public final n l() {
        return this.f24047l;
    }

    public final boolean m() {
        return this.f24043h;
    }

    public final h5.h n() {
        return this.f24040e;
    }

    public final h5.i o() {
        return this.f24039d;
    }

    public final s p() {
        return this.f24046k;
    }
}

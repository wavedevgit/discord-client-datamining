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
    private final Context f25792a;

    /* renamed from: b  reason: collision with root package name */
    private final Bitmap.Config f25793b;

    /* renamed from: c  reason: collision with root package name */
    private final ColorSpace f25794c;

    /* renamed from: d  reason: collision with root package name */
    private final h5.i f25795d;

    /* renamed from: e  reason: collision with root package name */
    private final h5.h f25796e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f25797f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f25798g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f25799h;

    /* renamed from: i  reason: collision with root package name */
    private final String f25800i;

    /* renamed from: j  reason: collision with root package name */
    private final Headers f25801j;

    /* renamed from: k  reason: collision with root package name */
    private final s f25802k;

    /* renamed from: l  reason: collision with root package name */
    private final n f25803l;

    /* renamed from: m  reason: collision with root package name */
    private final b f25804m;

    /* renamed from: n  reason: collision with root package name */
    private final b f25805n;

    /* renamed from: o  reason: collision with root package name */
    private final b f25806o;

    public m(Context context, Bitmap.Config config, ColorSpace colorSpace, h5.i iVar, h5.h hVar, boolean z10, boolean z11, boolean z12, String str, Headers headers, s sVar, n nVar, b bVar, b bVar2, b bVar3) {
        this.f25792a = context;
        this.f25793b = config;
        this.f25794c = colorSpace;
        this.f25795d = iVar;
        this.f25796e = hVar;
        this.f25797f = z10;
        this.f25798g = z11;
        this.f25799h = z12;
        this.f25800i = str;
        this.f25801j = headers;
        this.f25802k = sVar;
        this.f25803l = nVar;
        this.f25804m = bVar;
        this.f25805n = bVar2;
        this.f25806o = bVar3;
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
            context2 = mVar.f25792a;
        } else {
            context2 = context;
        }
        if ((i10 & 2) != 0) {
            config2 = mVar.f25793b;
        } else {
            config2 = config;
        }
        if ((i10 & 4) != 0) {
            colorSpace2 = mVar.f25794c;
        } else {
            colorSpace2 = colorSpace;
        }
        if ((i10 & 8) != 0) {
            iVar2 = mVar.f25795d;
        } else {
            iVar2 = iVar;
        }
        if ((i10 & 16) != 0) {
            hVar2 = mVar.f25796e;
        } else {
            hVar2 = hVar;
        }
        if ((i10 & 32) != 0) {
            z13 = mVar.f25797f;
        } else {
            z13 = z10;
        }
        if ((i10 & 64) != 0) {
            z14 = mVar.f25798g;
        } else {
            z14 = z11;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            z15 = mVar.f25799h;
        } else {
            z15 = z12;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            str2 = mVar.f25800i;
        } else {
            str2 = str;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
            headers2 = mVar.f25801j;
        } else {
            headers2 = headers;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
            sVar2 = mVar.f25802k;
        } else {
            sVar2 = sVar;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
            nVar2 = mVar.f25803l;
        } else {
            nVar2 = nVar;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
            bVar4 = mVar.f25804m;
        } else {
            bVar4 = bVar;
        }
        if ((i10 & 8192) != 0) {
            bVar5 = mVar.f25805n;
        } else {
            bVar5 = bVar2;
        }
        if ((i10 & 16384) != 0) {
            bVar6 = mVar.f25806o;
        } else {
            bVar6 = bVar3;
        }
        return mVar.a(context2, config2, colorSpace2, iVar2, hVar2, z13, z14, z15, str2, headers2, sVar2, nVar2, bVar4, bVar5, bVar6);
    }

    public final m a(Context context, Bitmap.Config config, ColorSpace colorSpace, h5.i iVar, h5.h hVar, boolean z10, boolean z11, boolean z12, String str, Headers headers, s sVar, n nVar, b bVar, b bVar2, b bVar3) {
        return new m(context, config, colorSpace, iVar, hVar, z10, z11, z12, str, headers, sVar, nVar, bVar, bVar2, bVar3);
    }

    public final boolean c() {
        return this.f25797f;
    }

    public final boolean d() {
        return this.f25798g;
    }

    public final ColorSpace e() {
        return this.f25794c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof m) {
            m mVar = (m) obj;
            if (Intrinsics.areEqual(this.f25792a, mVar.f25792a) && this.f25793b == mVar.f25793b) {
                if ((Build.VERSION.SDK_INT < 26 || Intrinsics.areEqual(this.f25794c, mVar.f25794c)) && Intrinsics.areEqual(this.f25795d, mVar.f25795d) && this.f25796e == mVar.f25796e && this.f25797f == mVar.f25797f && this.f25798g == mVar.f25798g && this.f25799h == mVar.f25799h && Intrinsics.areEqual(this.f25800i, mVar.f25800i) && Intrinsics.areEqual(this.f25801j, mVar.f25801j) && Intrinsics.areEqual(this.f25802k, mVar.f25802k) && Intrinsics.areEqual(this.f25803l, mVar.f25803l) && this.f25804m == mVar.f25804m && this.f25805n == mVar.f25805n && this.f25806o == mVar.f25806o) {
                    return true;
                }
                return false;
            }
            return false;
        }
        return false;
    }

    public final Bitmap.Config f() {
        return this.f25793b;
    }

    public final Context g() {
        return this.f25792a;
    }

    public final String h() {
        return this.f25800i;
    }

    public int hashCode() {
        int i10;
        int hashCode = ((this.f25792a.hashCode() * 31) + this.f25793b.hashCode()) * 31;
        ColorSpace colorSpace = this.f25794c;
        int i11 = 0;
        if (colorSpace != null) {
            i10 = colorSpace.hashCode();
        } else {
            i10 = 0;
        }
        int hashCode2 = (((((((((((hashCode + i10) * 31) + this.f25795d.hashCode()) * 31) + this.f25796e.hashCode()) * 31) + Boolean.hashCode(this.f25797f)) * 31) + Boolean.hashCode(this.f25798g)) * 31) + Boolean.hashCode(this.f25799h)) * 31;
        String str = this.f25800i;
        if (str != null) {
            i11 = str.hashCode();
        }
        return ((((((((((((hashCode2 + i11) * 31) + this.f25801j.hashCode()) * 31) + this.f25802k.hashCode()) * 31) + this.f25803l.hashCode()) * 31) + this.f25804m.hashCode()) * 31) + this.f25805n.hashCode()) * 31) + this.f25806o.hashCode();
    }

    public final b i() {
        return this.f25805n;
    }

    public final Headers j() {
        return this.f25801j;
    }

    public final b k() {
        return this.f25806o;
    }

    public final n l() {
        return this.f25803l;
    }

    public final boolean m() {
        return this.f25799h;
    }

    public final h5.h n() {
        return this.f25796e;
    }

    public final h5.i o() {
        return this.f25795d;
    }

    public final s p() {
        return this.f25802k;
    }
}

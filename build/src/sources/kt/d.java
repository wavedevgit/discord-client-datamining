package kt;

import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.webrtc.PeerConnection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f35549a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f35550b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f35551c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f35552d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f35553e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f35554f;

    /* renamed from: g  reason: collision with root package name */
    private final String f35555g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f35556h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f35557i;

    /* renamed from: j  reason: collision with root package name */
    private final String f35558j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f35559k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f35560l;

    /* renamed from: m  reason: collision with root package name */
    private final boolean f35561m;

    /* renamed from: n  reason: collision with root package name */
    private final boolean f35562n;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f35563o;

    /* renamed from: p  reason: collision with root package name */
    private a f35564p;

    public d(boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, boolean z15, String prettyPrintIndent, boolean z16, boolean z17, String classDiscriminator, boolean z18, boolean z19, u uVar, boolean z20, boolean z21, boolean z22, a classDiscriminatorMode) {
        Intrinsics.checkNotNullParameter(prettyPrintIndent, "prettyPrintIndent");
        Intrinsics.checkNotNullParameter(classDiscriminator, "classDiscriminator");
        Intrinsics.checkNotNullParameter(classDiscriminatorMode, "classDiscriminatorMode");
        this.f35549a = z10;
        this.f35550b = z11;
        this.f35551c = z12;
        this.f35552d = z13;
        this.f35553e = z14;
        this.f35554f = z15;
        this.f35555g = prettyPrintIndent;
        this.f35556h = z16;
        this.f35557i = z17;
        this.f35558j = classDiscriminator;
        this.f35559k = z18;
        this.f35560l = z19;
        this.f35561m = z20;
        this.f35562n = z21;
        this.f35563o = z22;
        this.f35564p = classDiscriminatorMode;
    }

    public final boolean a() {
        return this.f35563o;
    }

    public final boolean b() {
        return this.f35559k;
    }

    public final boolean c() {
        return this.f35552d;
    }

    public final boolean d() {
        return this.f35562n;
    }

    public final String e() {
        return this.f35558j;
    }

    public final a f() {
        return this.f35564p;
    }

    public final boolean g() {
        return this.f35556h;
    }

    public final boolean h() {
        return this.f35561m;
    }

    public final boolean i() {
        return this.f35549a;
    }

    public final boolean j() {
        return this.f35554f;
    }

    public final boolean k() {
        return this.f35550b;
    }

    public final u l() {
        return null;
    }

    public final boolean m() {
        return this.f35553e;
    }

    public final String n() {
        return this.f35555g;
    }

    public final boolean o() {
        return this.f35560l;
    }

    public final boolean p() {
        return this.f35557i;
    }

    public final boolean q() {
        return this.f35551c;
    }

    public String toString() {
        return "JsonConfiguration(encodeDefaults=" + this.f35549a + ", ignoreUnknownKeys=" + this.f35550b + ", isLenient=" + this.f35551c + ", allowStructuredMapKeys=" + this.f35552d + ", prettyPrint=" + this.f35553e + ", explicitNulls=" + this.f35554f + ", prettyPrintIndent='" + this.f35555g + "', coerceInputValues=" + this.f35556h + ", useArrayPolymorphism=" + this.f35557i + ", classDiscriminator='" + this.f35558j + "', allowSpecialFloatingPointValues=" + this.f35559k + ", useAlternativeNames=" + this.f35560l + ", namingStrategy=" + ((Object) null) + ", decodeEnumsCaseInsensitive=" + this.f35561m + ", allowTrailingComma=" + this.f35562n + ", allowComments=" + this.f35563o + ", classDiscriminatorMode=" + this.f35564p + ')';
    }

    public /* synthetic */ d(boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, boolean z15, String str, boolean z16, boolean z17, String str2, boolean z18, boolean z19, u uVar, boolean z20, boolean z21, boolean z22, a aVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? false : z10, (i10 & 2) != 0 ? false : z11, (i10 & 4) != 0 ? false : z12, (i10 & 8) != 0 ? false : z13, (i10 & 16) != 0 ? false : z14, (i10 & 32) != 0 ? true : z15, (i10 & 64) != 0 ? "    " : str, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? false : z16, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? false : z17, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? "type" : str2, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? false : z18, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 0 ? z19 : true, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : uVar, (i10 & 8192) != 0 ? false : z20, (i10 & 16384) != 0 ? false : z21, (i10 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? false : z22, (i10 & 65536) != 0 ? a.f35541i : aVar);
    }
}

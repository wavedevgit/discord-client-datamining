package kt;

import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.webrtc.PeerConnection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f35501a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f35502b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f35503c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f35504d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f35505e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f35506f;

    /* renamed from: g  reason: collision with root package name */
    private final String f35507g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f35508h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f35509i;

    /* renamed from: j  reason: collision with root package name */
    private final String f35510j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f35511k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f35512l;

    /* renamed from: m  reason: collision with root package name */
    private final boolean f35513m;

    /* renamed from: n  reason: collision with root package name */
    private final boolean f35514n;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f35515o;

    /* renamed from: p  reason: collision with root package name */
    private a f35516p;

    public d(boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, boolean z15, String prettyPrintIndent, boolean z16, boolean z17, String classDiscriminator, boolean z18, boolean z19, u uVar, boolean z20, boolean z21, boolean z22, a classDiscriminatorMode) {
        Intrinsics.checkNotNullParameter(prettyPrintIndent, "prettyPrintIndent");
        Intrinsics.checkNotNullParameter(classDiscriminator, "classDiscriminator");
        Intrinsics.checkNotNullParameter(classDiscriminatorMode, "classDiscriminatorMode");
        this.f35501a = z10;
        this.f35502b = z11;
        this.f35503c = z12;
        this.f35504d = z13;
        this.f35505e = z14;
        this.f35506f = z15;
        this.f35507g = prettyPrintIndent;
        this.f35508h = z16;
        this.f35509i = z17;
        this.f35510j = classDiscriminator;
        this.f35511k = z18;
        this.f35512l = z19;
        this.f35513m = z20;
        this.f35514n = z21;
        this.f35515o = z22;
        this.f35516p = classDiscriminatorMode;
    }

    public final boolean a() {
        return this.f35515o;
    }

    public final boolean b() {
        return this.f35511k;
    }

    public final boolean c() {
        return this.f35504d;
    }

    public final boolean d() {
        return this.f35514n;
    }

    public final String e() {
        return this.f35510j;
    }

    public final a f() {
        return this.f35516p;
    }

    public final boolean g() {
        return this.f35508h;
    }

    public final boolean h() {
        return this.f35513m;
    }

    public final boolean i() {
        return this.f35501a;
    }

    public final boolean j() {
        return this.f35506f;
    }

    public final boolean k() {
        return this.f35502b;
    }

    public final u l() {
        return null;
    }

    public final boolean m() {
        return this.f35505e;
    }

    public final String n() {
        return this.f35507g;
    }

    public final boolean o() {
        return this.f35512l;
    }

    public final boolean p() {
        return this.f35509i;
    }

    public final boolean q() {
        return this.f35503c;
    }

    public String toString() {
        return "JsonConfiguration(encodeDefaults=" + this.f35501a + ", ignoreUnknownKeys=" + this.f35502b + ", isLenient=" + this.f35503c + ", allowStructuredMapKeys=" + this.f35504d + ", prettyPrint=" + this.f35505e + ", explicitNulls=" + this.f35506f + ", prettyPrintIndent='" + this.f35507g + "', coerceInputValues=" + this.f35508h + ", useArrayPolymorphism=" + this.f35509i + ", classDiscriminator='" + this.f35510j + "', allowSpecialFloatingPointValues=" + this.f35511k + ", useAlternativeNames=" + this.f35512l + ", namingStrategy=" + ((Object) null) + ", decodeEnumsCaseInsensitive=" + this.f35513m + ", allowTrailingComma=" + this.f35514n + ", allowComments=" + this.f35515o + ", classDiscriminatorMode=" + this.f35516p + ')';
    }

    public /* synthetic */ d(boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, boolean z15, String str, boolean z16, boolean z17, String str2, boolean z18, boolean z19, u uVar, boolean z20, boolean z21, boolean z22, a aVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? false : z10, (i10 & 2) != 0 ? false : z11, (i10 & 4) != 0 ? false : z12, (i10 & 8) != 0 ? false : z13, (i10 & 16) != 0 ? false : z14, (i10 & 32) != 0 ? true : z15, (i10 & 64) != 0 ? "    " : str, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? false : z16, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? false : z17, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? "type" : str2, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? false : z18, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 0 ? z19 : true, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : uVar, (i10 & 8192) != 0 ? false : z20, (i10 & 16384) != 0 ? false : z21, (i10 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? false : z22, (i10 & 65536) != 0 ? a.f35493i : aVar);
    }
}

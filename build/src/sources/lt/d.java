package lt;

import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.webrtc.PeerConnection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f36628a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f36629b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f36630c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f36631d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f36632e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f36633f;

    /* renamed from: g  reason: collision with root package name */
    private final String f36634g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f36635h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f36636i;

    /* renamed from: j  reason: collision with root package name */
    private final String f36637j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f36638k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f36639l;

    /* renamed from: m  reason: collision with root package name */
    private final boolean f36640m;

    /* renamed from: n  reason: collision with root package name */
    private final boolean f36641n;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f36642o;

    /* renamed from: p  reason: collision with root package name */
    private a f36643p;

    public d(boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, boolean z15, String prettyPrintIndent, boolean z16, boolean z17, String classDiscriminator, boolean z18, boolean z19, u uVar, boolean z20, boolean z21, boolean z22, a classDiscriminatorMode) {
        Intrinsics.checkNotNullParameter(prettyPrintIndent, "prettyPrintIndent");
        Intrinsics.checkNotNullParameter(classDiscriminator, "classDiscriminator");
        Intrinsics.checkNotNullParameter(classDiscriminatorMode, "classDiscriminatorMode");
        this.f36628a = z10;
        this.f36629b = z11;
        this.f36630c = z12;
        this.f36631d = z13;
        this.f36632e = z14;
        this.f36633f = z15;
        this.f36634g = prettyPrintIndent;
        this.f36635h = z16;
        this.f36636i = z17;
        this.f36637j = classDiscriminator;
        this.f36638k = z18;
        this.f36639l = z19;
        this.f36640m = z20;
        this.f36641n = z21;
        this.f36642o = z22;
        this.f36643p = classDiscriminatorMode;
    }

    public final boolean a() {
        return this.f36642o;
    }

    public final boolean b() {
        return this.f36638k;
    }

    public final boolean c() {
        return this.f36631d;
    }

    public final boolean d() {
        return this.f36641n;
    }

    public final String e() {
        return this.f36637j;
    }

    public final a f() {
        return this.f36643p;
    }

    public final boolean g() {
        return this.f36635h;
    }

    public final boolean h() {
        return this.f36640m;
    }

    public final boolean i() {
        return this.f36628a;
    }

    public final boolean j() {
        return this.f36633f;
    }

    public final boolean k() {
        return this.f36629b;
    }

    public final u l() {
        return null;
    }

    public final boolean m() {
        return this.f36632e;
    }

    public final String n() {
        return this.f36634g;
    }

    public final boolean o() {
        return this.f36639l;
    }

    public final boolean p() {
        return this.f36636i;
    }

    public final boolean q() {
        return this.f36630c;
    }

    public String toString() {
        return "JsonConfiguration(encodeDefaults=" + this.f36628a + ", ignoreUnknownKeys=" + this.f36629b + ", isLenient=" + this.f36630c + ", allowStructuredMapKeys=" + this.f36631d + ", prettyPrint=" + this.f36632e + ", explicitNulls=" + this.f36633f + ", prettyPrintIndent='" + this.f36634g + "', coerceInputValues=" + this.f36635h + ", useArrayPolymorphism=" + this.f36636i + ", classDiscriminator='" + this.f36637j + "', allowSpecialFloatingPointValues=" + this.f36638k + ", useAlternativeNames=" + this.f36639l + ", namingStrategy=" + ((Object) null) + ", decodeEnumsCaseInsensitive=" + this.f36640m + ", allowTrailingComma=" + this.f36641n + ", allowComments=" + this.f36642o + ", classDiscriminatorMode=" + this.f36643p + ')';
    }

    public /* synthetic */ d(boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, boolean z15, String str, boolean z16, boolean z17, String str2, boolean z18, boolean z19, u uVar, boolean z20, boolean z21, boolean z22, a aVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? false : z10, (i10 & 2) != 0 ? false : z11, (i10 & 4) != 0 ? false : z12, (i10 & 8) != 0 ? false : z13, (i10 & 16) != 0 ? false : z14, (i10 & 32) != 0 ? true : z15, (i10 & 64) != 0 ? "    " : str, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? false : z16, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? false : z17, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? "type" : str2, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? false : z18, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 0 ? z19 : true, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : uVar, (i10 & 8192) != 0 ? false : z20, (i10 & 16384) != 0 ? false : z21, (i10 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? false : z22, (i10 & 65536) != 0 ? a.f36620i : aVar);
    }
}

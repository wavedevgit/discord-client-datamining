package ut;

import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.webrtc.PeerConnection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f51802a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f51803b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f51804c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f51805d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f51806e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f51807f;

    /* renamed from: g  reason: collision with root package name */
    private final String f51808g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f51809h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f51810i;

    /* renamed from: j  reason: collision with root package name */
    private final String f51811j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f51812k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f51813l;

    /* renamed from: m  reason: collision with root package name */
    private final boolean f51814m;

    /* renamed from: n  reason: collision with root package name */
    private final boolean f51815n;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f51816o;

    /* renamed from: p  reason: collision with root package name */
    private a f51817p;

    public d(boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, boolean z15, String prettyPrintIndent, boolean z16, boolean z17, String classDiscriminator, boolean z18, boolean z19, u uVar, boolean z20, boolean z21, boolean z22, a classDiscriminatorMode) {
        Intrinsics.checkNotNullParameter(prettyPrintIndent, "prettyPrintIndent");
        Intrinsics.checkNotNullParameter(classDiscriminator, "classDiscriminator");
        Intrinsics.checkNotNullParameter(classDiscriminatorMode, "classDiscriminatorMode");
        this.f51802a = z10;
        this.f51803b = z11;
        this.f51804c = z12;
        this.f51805d = z13;
        this.f51806e = z14;
        this.f51807f = z15;
        this.f51808g = prettyPrintIndent;
        this.f51809h = z16;
        this.f51810i = z17;
        this.f51811j = classDiscriminator;
        this.f51812k = z18;
        this.f51813l = z19;
        this.f51814m = z20;
        this.f51815n = z21;
        this.f51816o = z22;
        this.f51817p = classDiscriminatorMode;
    }

    public final boolean a() {
        return this.f51816o;
    }

    public final boolean b() {
        return this.f51812k;
    }

    public final boolean c() {
        return this.f51805d;
    }

    public final boolean d() {
        return this.f51815n;
    }

    public final String e() {
        return this.f51811j;
    }

    public final a f() {
        return this.f51817p;
    }

    public final boolean g() {
        return this.f51809h;
    }

    public final boolean h() {
        return this.f51814m;
    }

    public final boolean i() {
        return this.f51802a;
    }

    public final boolean j() {
        return this.f51807f;
    }

    public final boolean k() {
        return this.f51803b;
    }

    public final u l() {
        return null;
    }

    public final boolean m() {
        return this.f51806e;
    }

    public final String n() {
        return this.f51808g;
    }

    public final boolean o() {
        return this.f51813l;
    }

    public final boolean p() {
        return this.f51810i;
    }

    public final boolean q() {
        return this.f51804c;
    }

    public String toString() {
        return "JsonConfiguration(encodeDefaults=" + this.f51802a + ", ignoreUnknownKeys=" + this.f51803b + ", isLenient=" + this.f51804c + ", allowStructuredMapKeys=" + this.f51805d + ", prettyPrint=" + this.f51806e + ", explicitNulls=" + this.f51807f + ", prettyPrintIndent='" + this.f51808g + "', coerceInputValues=" + this.f51809h + ", useArrayPolymorphism=" + this.f51810i + ", classDiscriminator='" + this.f51811j + "', allowSpecialFloatingPointValues=" + this.f51812k + ", useAlternativeNames=" + this.f51813l + ", namingStrategy=" + ((Object) null) + ", decodeEnumsCaseInsensitive=" + this.f51814m + ", allowTrailingComma=" + this.f51815n + ", allowComments=" + this.f51816o + ", classDiscriminatorMode=" + this.f51817p + ')';
    }

    public /* synthetic */ d(boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, boolean z15, String str, boolean z16, boolean z17, String str2, boolean z18, boolean z19, u uVar, boolean z20, boolean z21, boolean z22, a aVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? false : z10, (i10 & 2) != 0 ? false : z11, (i10 & 4) != 0 ? false : z12, (i10 & 8) != 0 ? false : z13, (i10 & 16) != 0 ? false : z14, (i10 & 32) != 0 ? true : z15, (i10 & 64) != 0 ? "    " : str, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? false : z16, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? false : z17, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? "type" : str2, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? false : z18, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 0 ? z19 : true, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : uVar, (i10 & 8192) != 0 ? false : z20, (i10 & 16384) != 0 ? false : z21, (i10 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? false : z22, (i10 & 65536) != 0 ? a.f51794i : aVar);
    }
}

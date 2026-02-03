package et;

import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.webrtc.PeerConnection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f22651a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f22652b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f22653c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f22654d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f22655e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f22656f;

    /* renamed from: g  reason: collision with root package name */
    private final String f22657g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f22658h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f22659i;

    /* renamed from: j  reason: collision with root package name */
    private final String f22660j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f22661k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f22662l;

    /* renamed from: m  reason: collision with root package name */
    private final boolean f22663m;

    /* renamed from: n  reason: collision with root package name */
    private final boolean f22664n;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f22665o;

    /* renamed from: p  reason: collision with root package name */
    private a f22666p;

    public d(boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, boolean z15, String prettyPrintIndent, boolean z16, boolean z17, String classDiscriminator, boolean z18, boolean z19, u uVar, boolean z20, boolean z21, boolean z22, a classDiscriminatorMode) {
        Intrinsics.checkNotNullParameter(prettyPrintIndent, "prettyPrintIndent");
        Intrinsics.checkNotNullParameter(classDiscriminator, "classDiscriminator");
        Intrinsics.checkNotNullParameter(classDiscriminatorMode, "classDiscriminatorMode");
        this.f22651a = z10;
        this.f22652b = z11;
        this.f22653c = z12;
        this.f22654d = z13;
        this.f22655e = z14;
        this.f22656f = z15;
        this.f22657g = prettyPrintIndent;
        this.f22658h = z16;
        this.f22659i = z17;
        this.f22660j = classDiscriminator;
        this.f22661k = z18;
        this.f22662l = z19;
        this.f22663m = z20;
        this.f22664n = z21;
        this.f22665o = z22;
        this.f22666p = classDiscriminatorMode;
    }

    public final boolean a() {
        return this.f22665o;
    }

    public final boolean b() {
        return this.f22661k;
    }

    public final boolean c() {
        return this.f22654d;
    }

    public final boolean d() {
        return this.f22664n;
    }

    public final String e() {
        return this.f22660j;
    }

    public final a f() {
        return this.f22666p;
    }

    public final boolean g() {
        return this.f22658h;
    }

    public final boolean h() {
        return this.f22663m;
    }

    public final boolean i() {
        return this.f22651a;
    }

    public final boolean j() {
        return this.f22656f;
    }

    public final boolean k() {
        return this.f22652b;
    }

    public final u l() {
        return null;
    }

    public final boolean m() {
        return this.f22655e;
    }

    public final String n() {
        return this.f22657g;
    }

    public final boolean o() {
        return this.f22662l;
    }

    public final boolean p() {
        return this.f22659i;
    }

    public final boolean q() {
        return this.f22653c;
    }

    public String toString() {
        return "JsonConfiguration(encodeDefaults=" + this.f22651a + ", ignoreUnknownKeys=" + this.f22652b + ", isLenient=" + this.f22653c + ", allowStructuredMapKeys=" + this.f22654d + ", prettyPrint=" + this.f22655e + ", explicitNulls=" + this.f22656f + ", prettyPrintIndent='" + this.f22657g + "', coerceInputValues=" + this.f22658h + ", useArrayPolymorphism=" + this.f22659i + ", classDiscriminator='" + this.f22660j + "', allowSpecialFloatingPointValues=" + this.f22661k + ", useAlternativeNames=" + this.f22662l + ", namingStrategy=" + ((Object) null) + ", decodeEnumsCaseInsensitive=" + this.f22663m + ", allowTrailingComma=" + this.f22664n + ", allowComments=" + this.f22665o + ", classDiscriminatorMode=" + this.f22666p + ')';
    }

    public /* synthetic */ d(boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, boolean z15, String str, boolean z16, boolean z17, String str2, boolean z18, boolean z19, u uVar, boolean z20, boolean z21, boolean z22, a aVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? false : z10, (i10 & 2) != 0 ? false : z11, (i10 & 4) != 0 ? false : z12, (i10 & 8) != 0 ? false : z13, (i10 & 16) != 0 ? false : z14, (i10 & 32) != 0 ? true : z15, (i10 & 64) != 0 ? "    " : str, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? false : z16, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? false : z17, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? "type" : str2, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? false : z18, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 0 ? z19 : true, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : uVar, (i10 & 8192) != 0 ? false : z20, (i10 & 16384) != 0 ? false : z21, (i10 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? false : z22, (i10 & 65536) != 0 ? a.f22643i : aVar);
    }
}

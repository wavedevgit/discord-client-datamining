package io.sentry;

import com.discord.misc.utilities.logThrottle.LogThrottleSingleton;
import java.util.Arrays;
import java.util.Collections;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Locale;
import java.util.Set;
import java.util.concurrent.CopyOnWriteArraySet;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m7 {

    /* renamed from: u  reason: collision with root package name */
    private static final List f29531u = Collections.unmodifiableList(Arrays.asList("Content-Type", "Content-Length", "Accept"));

    /* renamed from: a  reason: collision with root package name */
    private Double f29532a;

    /* renamed from: b  reason: collision with root package name */
    private Double f29533b;

    /* renamed from: m  reason: collision with root package name */
    private io.sentry.protocol.r f29544m;

    /* renamed from: s  reason: collision with root package name */
    private String[] f29550s;

    /* renamed from: t  reason: collision with root package name */
    private String[] f29551t;

    /* renamed from: c  reason: collision with root package name */
    private Set f29534c = new CopyOnWriteArraySet();

    /* renamed from: d  reason: collision with root package name */
    private Set f29535d = new CopyOnWriteArraySet();

    /* renamed from: e  reason: collision with root package name */
    private String f29536e = null;

    /* renamed from: f  reason: collision with root package name */
    private String f29537f = null;

    /* renamed from: g  reason: collision with root package name */
    private a f29538g = a.MEDIUM;

    /* renamed from: h  reason: collision with root package name */
    private int f29539h = 1;

    /* renamed from: i  reason: collision with root package name */
    private long f29540i = 30000;

    /* renamed from: j  reason: collision with root package name */
    private long f29541j = 5000;

    /* renamed from: k  reason: collision with root package name */
    private long f29542k = LogThrottleSingleton.RATE_LIMIT_ONE_HOUR;

    /* renamed from: l  reason: collision with root package name */
    private boolean f29543l = true;

    /* renamed from: n  reason: collision with root package name */
    private boolean f29545n = false;

    /* renamed from: o  reason: collision with root package name */
    private n4 f29546o = n4.PIXEL_COPY;

    /* renamed from: p  reason: collision with root package name */
    private String[] f29547p = new String[0];

    /* renamed from: q  reason: collision with root package name */
    private String[] f29548q = new String[0];

    /* renamed from: r  reason: collision with root package name */
    private boolean f29549r = true;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum a {
        LOW(0.8f, 50000, 10),
        MEDIUM(1.0f, 75000, 30),
        HIGH(1.0f, 100000, 50);
        
        public final int bitRate;
        public final int screenshotQuality;
        public final float sizeScale;

        a(float f10, int i10, int i11) {
            this.sizeScale = f10;
            this.bitRate = i10;
            this.screenshotQuality = i11;
        }

        @NotNull
        public String serializedName() {
            return name().toLowerCase(Locale.ROOT);
        }
    }

    public m7(boolean z10, io.sentry.protocol.r rVar) {
        List list = f29531u;
        this.f29550s = (String[]) list.toArray(new String[0]);
        this.f29551t = (String[]) list.toArray(new String[0]);
        if (!z10) {
            C(true);
            B(true);
            this.f29534c.add("android.webkit.WebView");
            this.f29534c.add("android.widget.VideoView");
            this.f29534c.add("androidx.media3.ui.PlayerView");
            this.f29534c.add("com.google.android.exoplayer2.ui.PlayerView");
            this.f29534c.add("com.google.android.exoplayer2.ui.StyledPlayerView");
            this.f29544m = rVar;
        }
    }

    public static List i() {
        return f29531u;
    }

    private static String[] z(List list, List list2) {
        LinkedHashSet linkedHashSet = new LinkedHashSet();
        linkedHashSet.addAll(list);
        linkedHashSet.addAll(list2);
        return (String[]) linkedHashSet.toArray(new String[0]);
    }

    public void A(boolean z10) {
        this.f29545n = z10;
    }

    public void B(boolean z10) {
        if (z10) {
            a("android.widget.ImageView");
            this.f29535d.remove("android.widget.ImageView");
            return;
        }
        b("android.widget.ImageView");
        this.f29534c.remove("android.widget.ImageView");
    }

    public void C(boolean z10) {
        if (z10) {
            a("android.widget.TextView");
            this.f29535d.remove("android.widget.TextView");
            return;
        }
        b("android.widget.TextView");
        this.f29534c.remove("android.widget.TextView");
    }

    public void D(String str) {
        a(str);
        this.f29536e = str;
    }

    public void E(boolean z10) {
        this.f29549r = z10;
    }

    public void F(String[] strArr) {
        this.f29547p = strArr;
    }

    public void G(String[] strArr) {
        this.f29548q = strArr;
    }

    public void H(List list) {
        this.f29550s = z(f29531u, list);
    }

    public void I(List list) {
        this.f29551t = z(f29531u, list);
    }

    public void J(Double d10) {
        if (io.sentry.util.c0.f(d10)) {
            this.f29533b = d10;
            return;
        }
        throw new IllegalArgumentException("The value " + d10 + " is not valid. Use null to disable or values >= 0.0 and <= 1.0.");
    }

    public void K(a aVar) {
        this.f29538g = aVar;
    }

    public void L(n4 n4Var) {
        this.f29546o = n4Var;
    }

    public void M(io.sentry.protocol.r rVar) {
        this.f29544m = rVar;
    }

    public void N(Double d10) {
        if (io.sentry.util.c0.f(d10)) {
            this.f29532a = d10;
            return;
        }
        throw new IllegalArgumentException("The value " + d10 + " is not valid. Use null to disable or values >= 0.0 and <= 1.0.");
    }

    public void O(String str) {
        this.f29537f = str;
    }

    public void a(String str) {
        this.f29534c.add(str);
    }

    public void b(String str) {
        this.f29535d.add(str);
    }

    public long c() {
        return this.f29540i;
    }

    public int d() {
        return this.f29539h;
    }

    public Set e() {
        return this.f29534c;
    }

    public String f() {
        return this.f29536e;
    }

    public String[] g() {
        return this.f29547p;
    }

    public String[] h() {
        return this.f29548q;
    }

    public String[] j() {
        return this.f29550s;
    }

    public String[] k() {
        return this.f29551t;
    }

    public Double l() {
        return this.f29533b;
    }

    public a m() {
        return this.f29538g;
    }

    public n4 n() {
        return this.f29546o;
    }

    public io.sentry.protocol.r o() {
        return this.f29544m;
    }

    public long p() {
        return this.f29542k;
    }

    public Double q() {
        return this.f29532a;
    }

    public long r() {
        return this.f29541j;
    }

    public Set s() {
        return this.f29535d;
    }

    public String t() {
        return this.f29537f;
    }

    public boolean u() {
        return this.f29545n;
    }

    public boolean v() {
        return this.f29549r;
    }

    public boolean w() {
        if (q() != null && q().doubleValue() > 0.0d) {
            return true;
        }
        return false;
    }

    public boolean x() {
        if (l() != null && l().doubleValue() > 0.0d) {
            return true;
        }
        return false;
    }

    public boolean y() {
        return this.f29543l;
    }
}

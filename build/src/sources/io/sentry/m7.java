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
    private static final List f30203u = Collections.unmodifiableList(Arrays.asList("Content-Type", "Content-Length", "Accept"));

    /* renamed from: a  reason: collision with root package name */
    private Double f30204a;

    /* renamed from: b  reason: collision with root package name */
    private Double f30205b;

    /* renamed from: m  reason: collision with root package name */
    private io.sentry.protocol.r f30216m;

    /* renamed from: s  reason: collision with root package name */
    private String[] f30222s;

    /* renamed from: t  reason: collision with root package name */
    private String[] f30223t;

    /* renamed from: c  reason: collision with root package name */
    private Set f30206c = new CopyOnWriteArraySet();

    /* renamed from: d  reason: collision with root package name */
    private Set f30207d = new CopyOnWriteArraySet();

    /* renamed from: e  reason: collision with root package name */
    private String f30208e = null;

    /* renamed from: f  reason: collision with root package name */
    private String f30209f = null;

    /* renamed from: g  reason: collision with root package name */
    private a f30210g = a.MEDIUM;

    /* renamed from: h  reason: collision with root package name */
    private int f30211h = 1;

    /* renamed from: i  reason: collision with root package name */
    private long f30212i = 30000;

    /* renamed from: j  reason: collision with root package name */
    private long f30213j = 5000;

    /* renamed from: k  reason: collision with root package name */
    private long f30214k = LogThrottleSingleton.RATE_LIMIT_ONE_HOUR;

    /* renamed from: l  reason: collision with root package name */
    private boolean f30215l = true;

    /* renamed from: n  reason: collision with root package name */
    private boolean f30217n = false;

    /* renamed from: o  reason: collision with root package name */
    private n4 f30218o = n4.PIXEL_COPY;

    /* renamed from: p  reason: collision with root package name */
    private String[] f30219p = new String[0];

    /* renamed from: q  reason: collision with root package name */
    private String[] f30220q = new String[0];

    /* renamed from: r  reason: collision with root package name */
    private boolean f30221r = true;

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
        List list = f30203u;
        this.f30222s = (String[]) list.toArray(new String[0]);
        this.f30223t = (String[]) list.toArray(new String[0]);
        if (!z10) {
            C(true);
            B(true);
            this.f30206c.add("android.webkit.WebView");
            this.f30206c.add("android.widget.VideoView");
            this.f30206c.add("androidx.media3.ui.PlayerView");
            this.f30206c.add("com.google.android.exoplayer2.ui.PlayerView");
            this.f30206c.add("com.google.android.exoplayer2.ui.StyledPlayerView");
            this.f30216m = rVar;
        }
    }

    public static List i() {
        return f30203u;
    }

    private static String[] z(List list, List list2) {
        LinkedHashSet linkedHashSet = new LinkedHashSet();
        linkedHashSet.addAll(list);
        linkedHashSet.addAll(list2);
        return (String[]) linkedHashSet.toArray(new String[0]);
    }

    public void A(boolean z10) {
        this.f30217n = z10;
    }

    public void B(boolean z10) {
        if (z10) {
            a("android.widget.ImageView");
            this.f30207d.remove("android.widget.ImageView");
            return;
        }
        b("android.widget.ImageView");
        this.f30206c.remove("android.widget.ImageView");
    }

    public void C(boolean z10) {
        if (z10) {
            a("android.widget.TextView");
            this.f30207d.remove("android.widget.TextView");
            return;
        }
        b("android.widget.TextView");
        this.f30206c.remove("android.widget.TextView");
    }

    public void D(String str) {
        a(str);
        this.f30208e = str;
    }

    public void E(boolean z10) {
        this.f30221r = z10;
    }

    public void F(String[] strArr) {
        this.f30219p = strArr;
    }

    public void G(String[] strArr) {
        this.f30220q = strArr;
    }

    public void H(List list) {
        this.f30222s = z(f30203u, list);
    }

    public void I(List list) {
        this.f30223t = z(f30203u, list);
    }

    public void J(Double d10) {
        if (io.sentry.util.c0.f(d10)) {
            this.f30205b = d10;
            return;
        }
        throw new IllegalArgumentException("The value " + d10 + " is not valid. Use null to disable or values >= 0.0 and <= 1.0.");
    }

    public void K(a aVar) {
        this.f30210g = aVar;
    }

    public void L(n4 n4Var) {
        this.f30218o = n4Var;
    }

    public void M(io.sentry.protocol.r rVar) {
        this.f30216m = rVar;
    }

    public void N(Double d10) {
        if (io.sentry.util.c0.f(d10)) {
            this.f30204a = d10;
            return;
        }
        throw new IllegalArgumentException("The value " + d10 + " is not valid. Use null to disable or values >= 0.0 and <= 1.0.");
    }

    public void O(String str) {
        this.f30209f = str;
    }

    public void a(String str) {
        this.f30206c.add(str);
    }

    public void b(String str) {
        this.f30207d.add(str);
    }

    public long c() {
        return this.f30212i;
    }

    public int d() {
        return this.f30211h;
    }

    public Set e() {
        return this.f30206c;
    }

    public String f() {
        return this.f30208e;
    }

    public String[] g() {
        return this.f30219p;
    }

    public String[] h() {
        return this.f30220q;
    }

    public String[] j() {
        return this.f30222s;
    }

    public String[] k() {
        return this.f30223t;
    }

    public Double l() {
        return this.f30205b;
    }

    public a m() {
        return this.f30210g;
    }

    public n4 n() {
        return this.f30218o;
    }

    public io.sentry.protocol.r o() {
        return this.f30216m;
    }

    public long p() {
        return this.f30214k;
    }

    public Double q() {
        return this.f30204a;
    }

    public long r() {
        return this.f30213j;
    }

    public Set s() {
        return this.f30207d;
    }

    public String t() {
        return this.f30209f;
    }

    public boolean u() {
        return this.f30217n;
    }

    public boolean v() {
        return this.f30221r;
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
        return this.f30215l;
    }
}

package androidx.core.app;

import android.app.Notification;
import android.app.NotificationChannel;
import android.media.AudioAttributes;
import android.net.Uri;
import android.os.Build;
import android.provider.Settings;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class NotificationChannelCompat {

    /* renamed from: a  reason: collision with root package name */
    final String f3036a;

    /* renamed from: b  reason: collision with root package name */
    CharSequence f3037b;

    /* renamed from: c  reason: collision with root package name */
    int f3038c;

    /* renamed from: d  reason: collision with root package name */
    String f3039d;

    /* renamed from: e  reason: collision with root package name */
    String f3040e;

    /* renamed from: f  reason: collision with root package name */
    boolean f3041f;

    /* renamed from: g  reason: collision with root package name */
    Uri f3042g;

    /* renamed from: h  reason: collision with root package name */
    AudioAttributes f3043h;

    /* renamed from: i  reason: collision with root package name */
    boolean f3044i;

    /* renamed from: j  reason: collision with root package name */
    int f3045j;

    /* renamed from: k  reason: collision with root package name */
    boolean f3046k;

    /* renamed from: l  reason: collision with root package name */
    long[] f3047l;

    /* renamed from: m  reason: collision with root package name */
    String f3048m;

    /* renamed from: n  reason: collision with root package name */
    String f3049n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f3050o;

    /* renamed from: p  reason: collision with root package name */
    private int f3051p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f3052q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f3053r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class Builder {

        /* renamed from: a  reason: collision with root package name */
        private final NotificationChannelCompat f3054a;

        public Builder(String str, int i10) {
            this.f3054a = new NotificationChannelCompat(str, i10);
        }

        public NotificationChannelCompat a() {
            return this.f3054a;
        }

        public Builder b(String str) {
            this.f3054a.f3039d = str;
            return this;
        }

        public Builder c(String str) {
            this.f3054a.f3040e = str;
            return this;
        }

        public Builder d(int i10) {
            this.f3054a.f3045j = i10;
            return this;
        }

        public Builder e(boolean z10) {
            this.f3054a.f3044i = z10;
            return this;
        }

        public Builder f(CharSequence charSequence) {
            this.f3054a.f3037b = charSequence;
            return this;
        }

        public Builder g(boolean z10) {
            this.f3054a.f3041f = z10;
            return this;
        }

        public Builder h(Uri uri, AudioAttributes audioAttributes) {
            NotificationChannelCompat notificationChannelCompat = this.f3054a;
            notificationChannelCompat.f3042g = uri;
            notificationChannelCompat.f3043h = audioAttributes;
            return this;
        }

        public Builder i(boolean z10) {
            this.f3054a.f3046k = z10;
            return this;
        }

        public Builder j(long[] jArr) {
            boolean z10;
            NotificationChannelCompat notificationChannelCompat = this.f3054a;
            if (jArr != null && jArr.length > 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            notificationChannelCompat.f3046k = z10;
            notificationChannelCompat.f3047l = jArr;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a {
        static boolean a(NotificationChannel notificationChannel) {
            return notificationChannel.canBypassDnd();
        }

        static boolean b(NotificationChannel notificationChannel) {
            return notificationChannel.canShowBadge();
        }

        static NotificationChannel c(String str, CharSequence charSequence, int i10) {
            return new NotificationChannel(str, charSequence, i10);
        }

        static void d(NotificationChannel notificationChannel, boolean z10) {
            notificationChannel.enableLights(z10);
        }

        static void e(NotificationChannel notificationChannel, boolean z10) {
            notificationChannel.enableVibration(z10);
        }

        static AudioAttributes f(NotificationChannel notificationChannel) {
            return notificationChannel.getAudioAttributes();
        }

        static String g(NotificationChannel notificationChannel) {
            return notificationChannel.getDescription();
        }

        static String h(NotificationChannel notificationChannel) {
            return notificationChannel.getGroup();
        }

        static String i(NotificationChannel notificationChannel) {
            return notificationChannel.getId();
        }

        static int j(NotificationChannel notificationChannel) {
            return notificationChannel.getImportance();
        }

        static int k(NotificationChannel notificationChannel) {
            return notificationChannel.getLightColor();
        }

        static int l(NotificationChannel notificationChannel) {
            return notificationChannel.getLockscreenVisibility();
        }

        static CharSequence m(NotificationChannel notificationChannel) {
            return notificationChannel.getName();
        }

        static Uri n(NotificationChannel notificationChannel) {
            return notificationChannel.getSound();
        }

        static long[] o(NotificationChannel notificationChannel) {
            return notificationChannel.getVibrationPattern();
        }

        static void p(NotificationChannel notificationChannel, String str) {
            notificationChannel.setDescription(str);
        }

        static void q(NotificationChannel notificationChannel, String str) {
            notificationChannel.setGroup(str);
        }

        static void r(NotificationChannel notificationChannel, int i10) {
            notificationChannel.setLightColor(i10);
        }

        static void s(NotificationChannel notificationChannel, boolean z10) {
            notificationChannel.setShowBadge(z10);
        }

        static void t(NotificationChannel notificationChannel, Uri uri, AudioAttributes audioAttributes) {
            notificationChannel.setSound(uri, audioAttributes);
        }

        static void u(NotificationChannel notificationChannel, long[] jArr) {
            notificationChannel.setVibrationPattern(jArr);
        }

        static boolean v(NotificationChannel notificationChannel) {
            return notificationChannel.shouldShowLights();
        }

        static boolean w(NotificationChannel notificationChannel) {
            return notificationChannel.shouldVibrate();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class b {
        static boolean a(NotificationChannel notificationChannel) {
            return notificationChannel.canBubble();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class c {
        static String a(NotificationChannel notificationChannel) {
            return notificationChannel.getConversationId();
        }

        static String b(NotificationChannel notificationChannel) {
            return notificationChannel.getParentChannelId();
        }

        static boolean c(NotificationChannel notificationChannel) {
            return notificationChannel.isImportantConversation();
        }

        static void d(NotificationChannel notificationChannel, String str, String str2) {
            notificationChannel.setConversationId(str, str2);
        }
    }

    NotificationChannelCompat(String str, int i10) {
        this.f3041f = true;
        this.f3042g = Settings.System.DEFAULT_NOTIFICATION_URI;
        this.f3045j = 0;
        this.f3036a = (String) b2.e.g(str);
        this.f3038c = i10;
        this.f3043h = Notification.AUDIO_ATTRIBUTES_DEFAULT;
    }

    public boolean a() {
        return this.f3041f;
    }

    public String b() {
        return this.f3036a;
    }

    public int c() {
        return this.f3038c;
    }

    public CharSequence d() {
        return this.f3037b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public NotificationChannel e() {
        String str;
        String str2;
        int i10 = Build.VERSION.SDK_INT;
        if (i10 < 26) {
            return null;
        }
        NotificationChannel c10 = a.c(this.f3036a, this.f3037b, this.f3038c);
        a.p(c10, this.f3039d);
        a.q(c10, this.f3040e);
        a.s(c10, this.f3041f);
        a.t(c10, this.f3042g, this.f3043h);
        a.d(c10, this.f3044i);
        a.r(c10, this.f3045j);
        a.u(c10, this.f3047l);
        a.e(c10, this.f3046k);
        if (i10 >= 30 && (str = this.f3048m) != null && (str2 = this.f3049n) != null) {
            c.d(c10, str, str2);
        }
        return c10;
    }

    public boolean f() {
        return this.f3044i;
    }

    public boolean g() {
        return this.f3046k;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public NotificationChannelCompat(NotificationChannel notificationChannel) {
        this(a.i(notificationChannel), a.j(notificationChannel));
        this.f3037b = a.m(notificationChannel);
        this.f3039d = a.g(notificationChannel);
        this.f3040e = a.h(notificationChannel);
        this.f3041f = a.b(notificationChannel);
        this.f3042g = a.n(notificationChannel);
        this.f3043h = a.f(notificationChannel);
        this.f3044i = a.v(notificationChannel);
        this.f3045j = a.k(notificationChannel);
        this.f3046k = a.w(notificationChannel);
        this.f3047l = a.o(notificationChannel);
        int i10 = Build.VERSION.SDK_INT;
        if (i10 >= 30) {
            this.f3048m = c.b(notificationChannel);
            this.f3049n = c.a(notificationChannel);
        }
        this.f3050o = a.a(notificationChannel);
        this.f3051p = a.l(notificationChannel);
        if (i10 >= 29) {
            this.f3052q = b.a(notificationChannel);
        }
        if (i10 >= 30) {
            this.f3053r = c.c(notificationChannel);
        }
    }
}

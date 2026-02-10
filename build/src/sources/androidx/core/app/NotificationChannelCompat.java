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
    final String f3033a;

    /* renamed from: b  reason: collision with root package name */
    CharSequence f3034b;

    /* renamed from: c  reason: collision with root package name */
    int f3035c;

    /* renamed from: d  reason: collision with root package name */
    String f3036d;

    /* renamed from: e  reason: collision with root package name */
    String f3037e;

    /* renamed from: f  reason: collision with root package name */
    boolean f3038f;

    /* renamed from: g  reason: collision with root package name */
    Uri f3039g;

    /* renamed from: h  reason: collision with root package name */
    AudioAttributes f3040h;

    /* renamed from: i  reason: collision with root package name */
    boolean f3041i;

    /* renamed from: j  reason: collision with root package name */
    int f3042j;

    /* renamed from: k  reason: collision with root package name */
    boolean f3043k;

    /* renamed from: l  reason: collision with root package name */
    long[] f3044l;

    /* renamed from: m  reason: collision with root package name */
    String f3045m;

    /* renamed from: n  reason: collision with root package name */
    String f3046n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f3047o;

    /* renamed from: p  reason: collision with root package name */
    private int f3048p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f3049q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f3050r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class Builder {

        /* renamed from: a  reason: collision with root package name */
        private final NotificationChannelCompat f3051a;

        public Builder(String str, int i10) {
            this.f3051a = new NotificationChannelCompat(str, i10);
        }

        public NotificationChannelCompat a() {
            return this.f3051a;
        }

        public Builder b(String str) {
            this.f3051a.f3036d = str;
            return this;
        }

        public Builder c(String str) {
            this.f3051a.f3037e = str;
            return this;
        }

        public Builder d(int i10) {
            this.f3051a.f3042j = i10;
            return this;
        }

        public Builder e(boolean z10) {
            this.f3051a.f3041i = z10;
            return this;
        }

        public Builder f(CharSequence charSequence) {
            this.f3051a.f3034b = charSequence;
            return this;
        }

        public Builder g(boolean z10) {
            this.f3051a.f3038f = z10;
            return this;
        }

        public Builder h(Uri uri, AudioAttributes audioAttributes) {
            NotificationChannelCompat notificationChannelCompat = this.f3051a;
            notificationChannelCompat.f3039g = uri;
            notificationChannelCompat.f3040h = audioAttributes;
            return this;
        }

        public Builder i(boolean z10) {
            this.f3051a.f3043k = z10;
            return this;
        }

        public Builder j(long[] jArr) {
            boolean z10;
            NotificationChannelCompat notificationChannelCompat = this.f3051a;
            if (jArr != null && jArr.length > 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            notificationChannelCompat.f3043k = z10;
            notificationChannelCompat.f3044l = jArr;
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
        this.f3038f = true;
        this.f3039g = Settings.System.DEFAULT_NOTIFICATION_URI;
        this.f3042j = 0;
        this.f3033a = (String) b2.e.g(str);
        this.f3035c = i10;
        this.f3040h = Notification.AUDIO_ATTRIBUTES_DEFAULT;
    }

    public boolean a() {
        return this.f3038f;
    }

    public String b() {
        return this.f3033a;
    }

    public int c() {
        return this.f3035c;
    }

    public CharSequence d() {
        return this.f3034b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public NotificationChannel e() {
        String str;
        String str2;
        int i10 = Build.VERSION.SDK_INT;
        if (i10 < 26) {
            return null;
        }
        NotificationChannel c10 = a.c(this.f3033a, this.f3034b, this.f3035c);
        a.p(c10, this.f3036d);
        a.q(c10, this.f3037e);
        a.s(c10, this.f3038f);
        a.t(c10, this.f3039g, this.f3040h);
        a.d(c10, this.f3041i);
        a.r(c10, this.f3042j);
        a.u(c10, this.f3044l);
        a.e(c10, this.f3043k);
        if (i10 >= 30 && (str = this.f3045m) != null && (str2 = this.f3046n) != null) {
            c.d(c10, str, str2);
        }
        return c10;
    }

    public boolean f() {
        return this.f3041i;
    }

    public boolean g() {
        return this.f3043k;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public NotificationChannelCompat(NotificationChannel notificationChannel) {
        this(a.i(notificationChannel), a.j(notificationChannel));
        this.f3034b = a.m(notificationChannel);
        this.f3036d = a.g(notificationChannel);
        this.f3037e = a.h(notificationChannel);
        this.f3038f = a.b(notificationChannel);
        this.f3039g = a.n(notificationChannel);
        this.f3040h = a.f(notificationChannel);
        this.f3041i = a.v(notificationChannel);
        this.f3042j = a.k(notificationChannel);
        this.f3043k = a.w(notificationChannel);
        this.f3044l = a.o(notificationChannel);
        int i10 = Build.VERSION.SDK_INT;
        if (i10 >= 30) {
            this.f3045m = c.b(notificationChannel);
            this.f3046n = c.a(notificationChannel);
        }
        this.f3047o = a.a(notificationChannel);
        this.f3048p = a.l(notificationChannel);
        if (i10 >= 29) {
            this.f3049q = b.a(notificationChannel);
        }
        if (i10 >= 30) {
            this.f3050r = c.c(notificationChannel);
        }
    }
}

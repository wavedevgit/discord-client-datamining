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
    final String f2895a;

    /* renamed from: b  reason: collision with root package name */
    CharSequence f2896b;

    /* renamed from: c  reason: collision with root package name */
    int f2897c;

    /* renamed from: d  reason: collision with root package name */
    String f2898d;

    /* renamed from: e  reason: collision with root package name */
    String f2899e;

    /* renamed from: f  reason: collision with root package name */
    boolean f2900f;

    /* renamed from: g  reason: collision with root package name */
    Uri f2901g;

    /* renamed from: h  reason: collision with root package name */
    AudioAttributes f2902h;

    /* renamed from: i  reason: collision with root package name */
    boolean f2903i;

    /* renamed from: j  reason: collision with root package name */
    int f2904j;

    /* renamed from: k  reason: collision with root package name */
    boolean f2905k;

    /* renamed from: l  reason: collision with root package name */
    long[] f2906l;

    /* renamed from: m  reason: collision with root package name */
    String f2907m;

    /* renamed from: n  reason: collision with root package name */
    String f2908n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f2909o;

    /* renamed from: p  reason: collision with root package name */
    private int f2910p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f2911q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f2912r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class Builder {

        /* renamed from: a  reason: collision with root package name */
        private final NotificationChannelCompat f2913a;

        public Builder(String str, int i10) {
            this.f2913a = new NotificationChannelCompat(str, i10);
        }

        public NotificationChannelCompat a() {
            return this.f2913a;
        }

        public Builder b(String str) {
            this.f2913a.f2898d = str;
            return this;
        }

        public Builder c(String str) {
            this.f2913a.f2899e = str;
            return this;
        }

        public Builder d(int i10) {
            this.f2913a.f2904j = i10;
            return this;
        }

        public Builder e(boolean z10) {
            this.f2913a.f2903i = z10;
            return this;
        }

        public Builder f(CharSequence charSequence) {
            this.f2913a.f2896b = charSequence;
            return this;
        }

        public Builder g(boolean z10) {
            this.f2913a.f2900f = z10;
            return this;
        }

        public Builder h(Uri uri, AudioAttributes audioAttributes) {
            NotificationChannelCompat notificationChannelCompat = this.f2913a;
            notificationChannelCompat.f2901g = uri;
            notificationChannelCompat.f2902h = audioAttributes;
            return this;
        }

        public Builder i(boolean z10) {
            this.f2913a.f2905k = z10;
            return this;
        }

        public Builder j(long[] jArr) {
            boolean z10;
            NotificationChannelCompat notificationChannelCompat = this.f2913a;
            if (jArr != null && jArr.length > 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            notificationChannelCompat.f2905k = z10;
            notificationChannelCompat.f2906l = jArr;
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
        this.f2900f = true;
        this.f2901g = Settings.System.DEFAULT_NOTIFICATION_URI;
        this.f2904j = 0;
        this.f2895a = (String) b2.e.g(str);
        this.f2897c = i10;
        this.f2902h = Notification.AUDIO_ATTRIBUTES_DEFAULT;
    }

    public boolean a() {
        return this.f2900f;
    }

    public String b() {
        return this.f2895a;
    }

    public int c() {
        return this.f2897c;
    }

    public CharSequence d() {
        return this.f2896b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public NotificationChannel e() {
        String str;
        String str2;
        int i10 = Build.VERSION.SDK_INT;
        if (i10 < 26) {
            return null;
        }
        NotificationChannel c10 = a.c(this.f2895a, this.f2896b, this.f2897c);
        a.p(c10, this.f2898d);
        a.q(c10, this.f2899e);
        a.s(c10, this.f2900f);
        a.t(c10, this.f2901g, this.f2902h);
        a.d(c10, this.f2903i);
        a.r(c10, this.f2904j);
        a.u(c10, this.f2906l);
        a.e(c10, this.f2905k);
        if (i10 >= 30 && (str = this.f2907m) != null && (str2 = this.f2908n) != null) {
            c.d(c10, str, str2);
        }
        return c10;
    }

    public boolean f() {
        return this.f2903i;
    }

    public boolean g() {
        return this.f2905k;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public NotificationChannelCompat(NotificationChannel notificationChannel) {
        this(a.i(notificationChannel), a.j(notificationChannel));
        this.f2896b = a.m(notificationChannel);
        this.f2898d = a.g(notificationChannel);
        this.f2899e = a.h(notificationChannel);
        this.f2900f = a.b(notificationChannel);
        this.f2901g = a.n(notificationChannel);
        this.f2902h = a.f(notificationChannel);
        this.f2903i = a.v(notificationChannel);
        this.f2904j = a.k(notificationChannel);
        this.f2905k = a.w(notificationChannel);
        this.f2906l = a.o(notificationChannel);
        int i10 = Build.VERSION.SDK_INT;
        if (i10 >= 30) {
            this.f2907m = c.b(notificationChannel);
            this.f2908n = c.a(notificationChannel);
        }
        this.f2909o = a.a(notificationChannel);
        this.f2910p = a.l(notificationChannel);
        if (i10 >= 29) {
            this.f2911q = b.a(notificationChannel);
        }
        if (i10 >= 30) {
            this.f2912r = c.c(notificationChannel);
        }
    }
}

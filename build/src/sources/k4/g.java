package k4;

import android.app.Notification;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final int f31432a;

    /* renamed from: b  reason: collision with root package name */
    private final int f31433b;

    /* renamed from: c  reason: collision with root package name */
    private final Notification f31434c;

    public g(int i10, Notification notification) {
        this(i10, notification, 0);
    }

    public int a() {
        return this.f31433b;
    }

    public Notification b() {
        return this.f31434c;
    }

    public int c() {
        return this.f31432a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || g.class != obj.getClass()) {
            return false;
        }
        g gVar = (g) obj;
        if (this.f31432a != gVar.f31432a || this.f31433b != gVar.f31433b) {
            return false;
        }
        return this.f31434c.equals(gVar.f31434c);
    }

    public int hashCode() {
        return (((this.f31432a * 31) + this.f31433b) * 31) + this.f31434c.hashCode();
    }

    public String toString() {
        return "ForegroundInfo{mNotificationId=" + this.f31432a + ", mForegroundServiceType=" + this.f31433b + ", mNotification=" + this.f31434c + '}';
    }

    public g(int i10, Notification notification, int i11) {
        this.f31432a = i10;
        this.f31434c = notification;
        this.f31433b = i11;
    }
}

package k4;

import android.app.Notification;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final int f32981a;

    /* renamed from: b  reason: collision with root package name */
    private final int f32982b;

    /* renamed from: c  reason: collision with root package name */
    private final Notification f32983c;

    public g(int i10, Notification notification) {
        this(i10, notification, 0);
    }

    public int a() {
        return this.f32982b;
    }

    public Notification b() {
        return this.f32983c;
    }

    public int c() {
        return this.f32981a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || g.class != obj.getClass()) {
            return false;
        }
        g gVar = (g) obj;
        if (this.f32981a != gVar.f32981a || this.f32982b != gVar.f32982b) {
            return false;
        }
        return this.f32983c.equals(gVar.f32983c);
    }

    public int hashCode() {
        return (((this.f32981a * 31) + this.f32982b) * 31) + this.f32983c.hashCode();
    }

    public String toString() {
        return "ForegroundInfo{mNotificationId=" + this.f32981a + ", mForegroundServiceType=" + this.f32982b + ", mNotification=" + this.f32983c + '}';
    }

    public g(int i10, Notification notification, int i11) {
        this.f32981a = i10;
        this.f32983c = notification;
        this.f32982b = i11;
    }
}

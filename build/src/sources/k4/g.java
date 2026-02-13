package k4;

import android.app.Notification;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final int f32075a;

    /* renamed from: b  reason: collision with root package name */
    private final int f32076b;

    /* renamed from: c  reason: collision with root package name */
    private final Notification f32077c;

    public g(int i10, Notification notification) {
        this(i10, notification, 0);
    }

    public int a() {
        return this.f32076b;
    }

    public Notification b() {
        return this.f32077c;
    }

    public int c() {
        return this.f32075a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || g.class != obj.getClass()) {
            return false;
        }
        g gVar = (g) obj;
        if (this.f32075a != gVar.f32075a || this.f32076b != gVar.f32076b) {
            return false;
        }
        return this.f32077c.equals(gVar.f32077c);
    }

    public int hashCode() {
        return (((this.f32075a * 31) + this.f32076b) * 31) + this.f32077c.hashCode();
    }

    public String toString() {
        return "ForegroundInfo{mNotificationId=" + this.f32075a + ", mForegroundServiceType=" + this.f32076b + ", mNotification=" + this.f32077c + '}';
    }

    public g(int i10, Notification notification, int i11) {
        this.f32075a = i10;
        this.f32077c = notification;
        this.f32076b = i11;
    }
}

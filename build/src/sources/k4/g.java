package k4;

import android.app.Notification;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final int f32727a;

    /* renamed from: b  reason: collision with root package name */
    private final int f32728b;

    /* renamed from: c  reason: collision with root package name */
    private final Notification f32729c;

    public g(int i10, Notification notification) {
        this(i10, notification, 0);
    }

    public int a() {
        return this.f32728b;
    }

    public Notification b() {
        return this.f32729c;
    }

    public int c() {
        return this.f32727a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || g.class != obj.getClass()) {
            return false;
        }
        g gVar = (g) obj;
        if (this.f32727a != gVar.f32727a || this.f32728b != gVar.f32728b) {
            return false;
        }
        return this.f32729c.equals(gVar.f32729c);
    }

    public int hashCode() {
        return (((this.f32727a * 31) + this.f32728b) * 31) + this.f32729c.hashCode();
    }

    public String toString() {
        return "ForegroundInfo{mNotificationId=" + this.f32727a + ", mForegroundServiceType=" + this.f32728b + ", mNotification=" + this.f32729c + '}';
    }

    public g(int i10, Notification notification, int i11) {
        this.f32727a = i10;
        this.f32729c = notification;
        this.f32728b = i11;
    }
}

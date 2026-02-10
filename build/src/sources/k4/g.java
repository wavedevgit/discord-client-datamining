package k4;

import android.app.Notification;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final int f30648a;

    /* renamed from: b  reason: collision with root package name */
    private final int f30649b;

    /* renamed from: c  reason: collision with root package name */
    private final Notification f30650c;

    public g(int i10, Notification notification) {
        this(i10, notification, 0);
    }

    public int a() {
        return this.f30649b;
    }

    public Notification b() {
        return this.f30650c;
    }

    public int c() {
        return this.f30648a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || g.class != obj.getClass()) {
            return false;
        }
        g gVar = (g) obj;
        if (this.f30648a != gVar.f30648a || this.f30649b != gVar.f30649b) {
            return false;
        }
        return this.f30650c.equals(gVar.f30650c);
    }

    public int hashCode() {
        return (((this.f30648a * 31) + this.f30649b) * 31) + this.f30650c.hashCode();
    }

    public String toString() {
        return "ForegroundInfo{mNotificationId=" + this.f30648a + ", mForegroundServiceType=" + this.f30649b + ", mNotification=" + this.f30650c + '}';
    }

    public g(int i10, Notification notification, int i11) {
        this.f30648a = i10;
        this.f30650c = notification;
        this.f30649b = i11;
    }
}

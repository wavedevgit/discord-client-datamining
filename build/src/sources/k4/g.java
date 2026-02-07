package k4;

import android.app.Notification;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final int f31480a;

    /* renamed from: b  reason: collision with root package name */
    private final int f31481b;

    /* renamed from: c  reason: collision with root package name */
    private final Notification f31482c;

    public g(int i10, Notification notification) {
        this(i10, notification, 0);
    }

    public int a() {
        return this.f31481b;
    }

    public Notification b() {
        return this.f31482c;
    }

    public int c() {
        return this.f31480a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || g.class != obj.getClass()) {
            return false;
        }
        g gVar = (g) obj;
        if (this.f31480a != gVar.f31480a || this.f31481b != gVar.f31481b) {
            return false;
        }
        return this.f31482c.equals(gVar.f31482c);
    }

    public int hashCode() {
        return (((this.f31480a * 31) + this.f31481b) * 31) + this.f31482c.hashCode();
    }

    public String toString() {
        return "ForegroundInfo{mNotificationId=" + this.f31480a + ", mForegroundServiceType=" + this.f31481b + ", mNotification=" + this.f31482c + '}';
    }

    public g(int i10, Notification notification, int i11) {
        this.f31480a = i10;
        this.f31482c = notification;
        this.f31481b = i11;
    }
}

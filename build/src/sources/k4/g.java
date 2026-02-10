package k4;

import android.app.Notification;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final int f31506a;

    /* renamed from: b  reason: collision with root package name */
    private final int f31507b;

    /* renamed from: c  reason: collision with root package name */
    private final Notification f31508c;

    public g(int i10, Notification notification) {
        this(i10, notification, 0);
    }

    public int a() {
        return this.f31507b;
    }

    public Notification b() {
        return this.f31508c;
    }

    public int c() {
        return this.f31506a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || g.class != obj.getClass()) {
            return false;
        }
        g gVar = (g) obj;
        if (this.f31506a != gVar.f31506a || this.f31507b != gVar.f31507b) {
            return false;
        }
        return this.f31508c.equals(gVar.f31508c);
    }

    public int hashCode() {
        return (((this.f31506a * 31) + this.f31507b) * 31) + this.f31508c.hashCode();
    }

    public String toString() {
        return "ForegroundInfo{mNotificationId=" + this.f31506a + ", mForegroundServiceType=" + this.f31507b + ", mNotification=" + this.f31508c + '}';
    }

    public g(int i10, Notification notification, int i11) {
        this.f31506a = i10;
        this.f31508c = notification;
        this.f31507b = i11;
    }
}

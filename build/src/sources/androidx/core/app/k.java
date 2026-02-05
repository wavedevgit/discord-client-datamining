package androidx.core.app;

import android.app.NotificationChannelGroup;
import android.os.Build;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class k {

    /* renamed from: a  reason: collision with root package name */
    final String f3218a;

    /* renamed from: b  reason: collision with root package name */
    CharSequence f3219b;

    /* renamed from: c  reason: collision with root package name */
    String f3220c;

    /* renamed from: d  reason: collision with root package name */
    private List f3221d = Collections.EMPTY_LIST;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a {
        static NotificationChannelGroup a(String str, CharSequence charSequence) {
            return new NotificationChannelGroup(str, charSequence);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class b {
        static void a(NotificationChannelGroup notificationChannelGroup, String str) {
            notificationChannelGroup.setDescription(str);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        final k f3222a;

        public c(String str) {
            this.f3222a = new k(str);
        }

        public k a() {
            return this.f3222a;
        }

        public c b(String str) {
            this.f3222a.f3220c = str;
            return this;
        }

        public c c(CharSequence charSequence) {
            this.f3222a.f3219b = charSequence;
            return this;
        }
    }

    k(String str) {
        this.f3218a = (String) b2.e.g(str);
    }

    public String a() {
        return this.f3218a;
    }

    public CharSequence b() {
        return this.f3219b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public NotificationChannelGroup c() {
        int i10 = Build.VERSION.SDK_INT;
        if (i10 < 26) {
            return null;
        }
        NotificationChannelGroup a10 = a.a(this.f3218a, this.f3219b);
        if (i10 >= 28) {
            b.a(a10, this.f3220c);
        }
        return a10;
    }
}

package androidx.core.app;

import android.app.NotificationChannelGroup;
import android.os.Build;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class k {

    /* renamed from: a  reason: collision with root package name */
    final String f3547a;

    /* renamed from: b  reason: collision with root package name */
    CharSequence f3548b;

    /* renamed from: c  reason: collision with root package name */
    String f3549c;

    /* renamed from: d  reason: collision with root package name */
    private List f3550d = Collections.EMPTY_LIST;

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
        final k f3551a;

        public c(String str) {
            this.f3551a = new k(str);
        }

        public k a() {
            return this.f3551a;
        }

        public c b(String str) {
            this.f3551a.f3549c = str;
            return this;
        }

        public c c(CharSequence charSequence) {
            this.f3551a.f3548b = charSequence;
            return this;
        }
    }

    k(String str) {
        this.f3547a = (String) b2.e.g(str);
    }

    public String a() {
        return this.f3547a;
    }

    public CharSequence b() {
        return this.f3548b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public NotificationChannelGroup c() {
        int i10 = Build.VERSION.SDK_INT;
        if (i10 < 26) {
            return null;
        }
        NotificationChannelGroup a10 = a.a(this.f3547a, this.f3548b);
        if (i10 >= 28) {
            b.a(a10, this.f3549c);
        }
        return a10;
    }
}

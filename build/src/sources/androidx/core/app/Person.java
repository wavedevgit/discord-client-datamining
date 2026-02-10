package androidx.core.app;

import android.app.Person;
import android.graphics.drawable.Icon;
import android.os.Bundle;
import android.os.PersistableBundle;
import androidx.core.graphics.drawable.IconCompat;
import com.facebook.react.devsupport.StackTraceHelper;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class Person {

    /* renamed from: a  reason: collision with root package name */
    CharSequence f3183a;

    /* renamed from: b  reason: collision with root package name */
    IconCompat f3184b;

    /* renamed from: c  reason: collision with root package name */
    String f3185c;

    /* renamed from: d  reason: collision with root package name */
    String f3186d;

    /* renamed from: e  reason: collision with root package name */
    boolean f3187e;

    /* renamed from: f  reason: collision with root package name */
    boolean f3188f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a {
        static Person a(PersistableBundle persistableBundle) {
            return new c().f(persistableBundle.getString(StackTraceHelper.NAME_KEY)).g(persistableBundle.getString("uri")).e(persistableBundle.getString("key")).b(persistableBundle.getBoolean("isBot")).d(persistableBundle.getBoolean("isImportant")).a();
        }

        static PersistableBundle b(Person person) {
            String str;
            PersistableBundle persistableBundle = new PersistableBundle();
            CharSequence charSequence = person.f3183a;
            if (charSequence != null) {
                str = charSequence.toString();
            } else {
                str = null;
            }
            persistableBundle.putString(StackTraceHelper.NAME_KEY, str);
            persistableBundle.putString("uri", person.f3185c);
            persistableBundle.putString("key", person.f3186d);
            persistableBundle.putBoolean("isBot", person.f3187e);
            persistableBundle.putBoolean("isImportant", person.f3188f);
            return persistableBundle;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class b {
        static Person a(android.app.Person person) {
            IconCompat iconCompat;
            c f10 = new c().f(person.getName());
            if (person.getIcon() != null) {
                iconCompat = IconCompat.b(person.getIcon());
            } else {
                iconCompat = null;
            }
            return f10.c(iconCompat).g(person.getUri()).e(person.getKey()).b(person.isBot()).d(person.isImportant()).a();
        }

        static android.app.Person b(Person person) {
            Icon icon;
            Person.Builder name = new Person.Builder().setName(person.f());
            if (person.d() != null) {
                icon = person.d().v();
            } else {
                icon = null;
            }
            return name.setIcon(icon).setUri(person.g()).setKey(person.e()).setBot(person.h()).setImportant(person.i()).build();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        CharSequence f3189a;

        /* renamed from: b  reason: collision with root package name */
        IconCompat f3190b;

        /* renamed from: c  reason: collision with root package name */
        String f3191c;

        /* renamed from: d  reason: collision with root package name */
        String f3192d;

        /* renamed from: e  reason: collision with root package name */
        boolean f3193e;

        /* renamed from: f  reason: collision with root package name */
        boolean f3194f;

        public Person a() {
            return new Person(this);
        }

        public c b(boolean z10) {
            this.f3193e = z10;
            return this;
        }

        public c c(IconCompat iconCompat) {
            this.f3190b = iconCompat;
            return this;
        }

        public c d(boolean z10) {
            this.f3194f = z10;
            return this;
        }

        public c e(String str) {
            this.f3192d = str;
            return this;
        }

        public c f(CharSequence charSequence) {
            this.f3189a = charSequence;
            return this;
        }

        public c g(String str) {
            this.f3191c = str;
            return this;
        }
    }

    Person(c cVar) {
        this.f3183a = cVar.f3189a;
        this.f3184b = cVar.f3190b;
        this.f3185c = cVar.f3191c;
        this.f3186d = cVar.f3192d;
        this.f3187e = cVar.f3193e;
        this.f3188f = cVar.f3194f;
    }

    public static Person a(android.app.Person person) {
        return b.a(person);
    }

    public static Person b(Bundle bundle) {
        IconCompat iconCompat;
        Bundle bundle2 = bundle.getBundle("icon");
        c f10 = new c().f(bundle.getCharSequence(StackTraceHelper.NAME_KEY));
        if (bundle2 != null) {
            iconCompat = IconCompat.a(bundle2);
        } else {
            iconCompat = null;
        }
        return f10.c(iconCompat).g(bundle.getString("uri")).e(bundle.getString("key")).b(bundle.getBoolean("isBot")).d(bundle.getBoolean("isImportant")).a();
    }

    public static Person c(PersistableBundle persistableBundle) {
        return a.a(persistableBundle);
    }

    public IconCompat d() {
        return this.f3184b;
    }

    public String e() {
        return this.f3186d;
    }

    public boolean equals(Object obj) {
        if (obj == null || !(obj instanceof Person)) {
            return false;
        }
        Person person = (Person) obj;
        String e10 = e();
        String e11 = person.e();
        if (e10 == null && e11 == null) {
            if (!Objects.equals(Objects.toString(f()), Objects.toString(person.f())) || !Objects.equals(g(), person.g()) || !Boolean.valueOf(h()).equals(Boolean.valueOf(person.h())) || !Boolean.valueOf(i()).equals(Boolean.valueOf(person.i()))) {
                return false;
            }
            return true;
        }
        return Objects.equals(e10, e11);
    }

    public CharSequence f() {
        return this.f3183a;
    }

    public String g() {
        return this.f3185c;
    }

    public boolean h() {
        return this.f3187e;
    }

    public int hashCode() {
        String e10 = e();
        if (e10 != null) {
            return e10.hashCode();
        }
        return Objects.hash(f(), g(), Boolean.valueOf(h()), Boolean.valueOf(i()));
    }

    public boolean i() {
        return this.f3188f;
    }

    public String j() {
        String str = this.f3185c;
        if (str != null) {
            return str;
        }
        if (this.f3183a != null) {
            return "name:" + ((Object) this.f3183a);
        }
        return "";
    }

    public android.app.Person k() {
        return b.b(this);
    }

    public Bundle l() {
        Bundle bundle;
        Bundle bundle2 = new Bundle();
        bundle2.putCharSequence(StackTraceHelper.NAME_KEY, this.f3183a);
        IconCompat iconCompat = this.f3184b;
        if (iconCompat != null) {
            bundle = iconCompat.u();
        } else {
            bundle = null;
        }
        bundle2.putBundle("icon", bundle);
        bundle2.putString("uri", this.f3185c);
        bundle2.putString("key", this.f3186d);
        bundle2.putBoolean("isBot", this.f3187e);
        bundle2.putBoolean("isImportant", this.f3188f);
        return bundle2;
    }

    public PersistableBundle m() {
        return a.b(this);
    }
}

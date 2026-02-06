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
    CharSequence f3486a;

    /* renamed from: b  reason: collision with root package name */
    IconCompat f3487b;

    /* renamed from: c  reason: collision with root package name */
    String f3488c;

    /* renamed from: d  reason: collision with root package name */
    String f3489d;

    /* renamed from: e  reason: collision with root package name */
    boolean f3490e;

    /* renamed from: f  reason: collision with root package name */
    boolean f3491f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a {
        static Person a(PersistableBundle persistableBundle) {
            return new c().f(persistableBundle.getString(StackTraceHelper.NAME_KEY)).g(persistableBundle.getString("uri")).e(persistableBundle.getString("key")).b(persistableBundle.getBoolean("isBot")).d(persistableBundle.getBoolean("isImportant")).a();
        }

        static PersistableBundle b(Person person) {
            String str;
            PersistableBundle persistableBundle = new PersistableBundle();
            CharSequence charSequence = person.f3486a;
            if (charSequence != null) {
                str = charSequence.toString();
            } else {
                str = null;
            }
            persistableBundle.putString(StackTraceHelper.NAME_KEY, str);
            persistableBundle.putString("uri", person.f3488c);
            persistableBundle.putString("key", person.f3489d);
            persistableBundle.putBoolean("isBot", person.f3490e);
            persistableBundle.putBoolean("isImportant", person.f3491f);
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
        CharSequence f3492a;

        /* renamed from: b  reason: collision with root package name */
        IconCompat f3493b;

        /* renamed from: c  reason: collision with root package name */
        String f3494c;

        /* renamed from: d  reason: collision with root package name */
        String f3495d;

        /* renamed from: e  reason: collision with root package name */
        boolean f3496e;

        /* renamed from: f  reason: collision with root package name */
        boolean f3497f;

        public Person a() {
            return new Person(this);
        }

        public c b(boolean z10) {
            this.f3496e = z10;
            return this;
        }

        public c c(IconCompat iconCompat) {
            this.f3493b = iconCompat;
            return this;
        }

        public c d(boolean z10) {
            this.f3497f = z10;
            return this;
        }

        public c e(String str) {
            this.f3495d = str;
            return this;
        }

        public c f(CharSequence charSequence) {
            this.f3492a = charSequence;
            return this;
        }

        public c g(String str) {
            this.f3494c = str;
            return this;
        }
    }

    Person(c cVar) {
        this.f3486a = cVar.f3492a;
        this.f3487b = cVar.f3493b;
        this.f3488c = cVar.f3494c;
        this.f3489d = cVar.f3495d;
        this.f3490e = cVar.f3496e;
        this.f3491f = cVar.f3497f;
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
        return this.f3487b;
    }

    public String e() {
        return this.f3489d;
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
        return this.f3486a;
    }

    public String g() {
        return this.f3488c;
    }

    public boolean h() {
        return this.f3490e;
    }

    public int hashCode() {
        String e10 = e();
        if (e10 != null) {
            return e10.hashCode();
        }
        return Objects.hash(f(), g(), Boolean.valueOf(h()), Boolean.valueOf(i()));
    }

    public boolean i() {
        return this.f3491f;
    }

    public String j() {
        String str = this.f3488c;
        if (str != null) {
            return str;
        }
        if (this.f3486a != null) {
            return "name:" + ((Object) this.f3486a);
        }
        return "";
    }

    public android.app.Person k() {
        return b.b(this);
    }

    public Bundle l() {
        Bundle bundle;
        Bundle bundle2 = new Bundle();
        bundle2.putCharSequence(StackTraceHelper.NAME_KEY, this.f3486a);
        IconCompat iconCompat = this.f3487b;
        if (iconCompat != null) {
            bundle = iconCompat.u();
        } else {
            bundle = null;
        }
        bundle2.putBundle("icon", bundle);
        bundle2.putString("uri", this.f3488c);
        bundle2.putString("key", this.f3489d);
        bundle2.putBoolean("isBot", this.f3490e);
        bundle2.putBoolean("isImportant", this.f3491f);
        return bundle2;
    }

    public PersistableBundle m() {
        return a.b(this);
    }
}

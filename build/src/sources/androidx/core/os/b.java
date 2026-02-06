package androidx.core.os;

import android.os.LocaleList;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class b implements a {

    /* renamed from: a  reason: collision with root package name */
    private final LocaleList f3622a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Object obj) {
        this.f3622a = (LocaleList) obj;
    }

    @Override // androidx.core.os.a
    public String a() {
        return this.f3622a.toLanguageTags();
    }

    @Override // androidx.core.os.a
    public Object b() {
        return this.f3622a;
    }

    public boolean equals(Object obj) {
        return this.f3622a.equals(((a) obj).b());
    }

    @Override // androidx.core.os.a
    public Locale get(int i10) {
        return this.f3622a.get(i10);
    }

    public int hashCode() {
        return this.f3622a.hashCode();
    }

    @Override // androidx.core.os.a
    public boolean isEmpty() {
        return this.f3622a.isEmpty();
    }

    @Override // androidx.core.os.a
    public int size() {
        return this.f3622a.size();
    }

    public String toString() {
        return this.f3622a.toString();
    }
}

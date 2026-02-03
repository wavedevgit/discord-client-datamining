package androidx.core.os;

import android.os.LocaleList;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class b implements a {

    /* renamed from: a  reason: collision with root package name */
    private final LocaleList f3212a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Object obj) {
        this.f3212a = (LocaleList) obj;
    }

    @Override // androidx.core.os.a
    public String a() {
        return this.f3212a.toLanguageTags();
    }

    @Override // androidx.core.os.a
    public Object b() {
        return this.f3212a;
    }

    public boolean equals(Object obj) {
        return this.f3212a.equals(((a) obj).b());
    }

    @Override // androidx.core.os.a
    public Locale get(int i10) {
        return this.f3212a.get(i10);
    }

    public int hashCode() {
        return this.f3212a.hashCode();
    }

    @Override // androidx.core.os.a
    public boolean isEmpty() {
        return this.f3212a.isEmpty();
    }

    @Override // androidx.core.os.a
    public int size() {
        return this.f3212a.size();
    }

    public String toString() {
        return this.f3212a.toString();
    }
}

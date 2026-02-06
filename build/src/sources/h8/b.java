package h8;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements h8.a {

    /* renamed from: b  reason: collision with root package name */
    public static final a f25811b = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final File f25812a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final b a(File file) {
            Intrinsics.checkNotNullParameter(file, "file");
            return new b(file, null);
        }

        public final b b(File file) {
            if (file == null) {
                return null;
            }
            return new b(file, null);
        }

        private a() {
        }
    }

    public /* synthetic */ b(File file, DefaultConstructorMarker defaultConstructorMarker) {
        this(file);
    }

    public static final b b(File file) {
        return f25811b.a(file);
    }

    public static final b c(File file) {
        return f25811b.b(file);
    }

    @Override // h8.a
    public InputStream a() {
        return new FileInputStream(this.f25812a);
    }

    public final File d() {
        return this.f25812a;
    }

    public boolean equals(Object obj) {
        if (obj != null && (obj instanceof b)) {
            return Intrinsics.areEqual(this.f25812a, ((b) obj).f25812a);
        }
        return false;
    }

    public int hashCode() {
        return this.f25812a.hashCode();
    }

    @Override // h8.a
    public long size() {
        return this.f25812a.length();
    }

    private b(File file) {
        this.f25812a = file;
    }
}

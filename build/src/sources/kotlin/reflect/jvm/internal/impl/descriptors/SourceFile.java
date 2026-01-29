package kotlin.reflect.jvm.internal.impl.descriptors;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface SourceFile {
    public static final SourceFile NO_SOURCE_FILE = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static class a implements SourceFile {
        a() {
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.SourceFile
        public String getName() {
            return null;
        }
    }

    String getName();
}

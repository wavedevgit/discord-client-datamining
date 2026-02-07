package kotlin.reflect.jvm.internal.impl.types.error;

import kotlin.enums.EnumEntries;
import org.jetbrains.annotations.NotNull;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ErrorEntity {

    /* renamed from: e  reason: collision with root package name */
    private static final /* synthetic */ ErrorEntity[] f34742e;

    /* renamed from: i  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f34743i;

    /* renamed from: d  reason: collision with root package name */
    private final String f34744d;
    public static final ErrorEntity ERROR_CLASS = new ErrorEntity("ERROR_CLASS", 0, "<Error class: %s>");
    public static final ErrorEntity ERROR_FUNCTION = new ErrorEntity("ERROR_FUNCTION", 1, "<Error function>");
    public static final ErrorEntity ERROR_SCOPE = new ErrorEntity("ERROR_SCOPE", 2, "<Error scope>");
    public static final ErrorEntity ERROR_MODULE = new ErrorEntity("ERROR_MODULE", 3, "<Error module>");
    public static final ErrorEntity ERROR_PROPERTY = new ErrorEntity("ERROR_PROPERTY", 4, "<Error property>");
    public static final ErrorEntity ERROR_TYPE = new ErrorEntity("ERROR_TYPE", 5, "[Error type: %s]");
    public static final ErrorEntity PARENT_OF_ERROR_SCOPE = new ErrorEntity("PARENT_OF_ERROR_SCOPE", 6, "<Fake parent for error lexical scope>");

    static {
        ErrorEntity[] a10 = a();
        f34742e = a10;
        f34743i = xr.a.a(a10);
    }

    private ErrorEntity(String str, int i10, String str2) {
        this.f34744d = str2;
    }

    private static final /* synthetic */ ErrorEntity[] a() {
        return new ErrorEntity[]{ERROR_CLASS, ERROR_FUNCTION, ERROR_SCOPE, ERROR_MODULE, ERROR_PROPERTY, ERROR_TYPE, PARENT_OF_ERROR_SCOPE};
    }

    public static ErrorEntity valueOf(String str) {
        return (ErrorEntity) Enum.valueOf(ErrorEntity.class, str);
    }

    public static ErrorEntity[] values() {
        return (ErrorEntity[]) f34742e.clone();
    }

    @NotNull
    public final String getDebugText() {
        return this.f34744d;
    }
}

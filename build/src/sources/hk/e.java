package hk;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public enum e {
    OTHER(Object.class),
    PURE_BARCODE(Void.class),
    POSSIBLE_FORMATS(List.class),
    TRY_HARDER(Void.class),
    CHARACTER_SET(String.class),
    ALLOWED_LENGTHS(int[].class),
    ASSUME_CODE_39_CHECK_DIGIT(Void.class),
    ASSUME_GS1(Void.class),
    RETURN_CODABAR_START_END(Void.class),
    NEED_RESULT_POINT_CALLBACK(q.class),
    ALLOWED_EAN_EXTENSIONS(int[].class),
    ALSO_INVERTED(Void.class);
    

    /* renamed from: d  reason: collision with root package name */
    private final Class f26130d;

    e(Class cls) {
        this.f26130d = cls;
    }
}

package dt;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import kotlinx.serialization.KSerializer;
@Retention(RetentionPolicy.RUNTIME)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public @interface m {
    Class with() default KSerializer.class;
}

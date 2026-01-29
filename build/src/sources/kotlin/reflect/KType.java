package kotlin.reflect;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface KType extends b {
    List getArguments();

    d getClassifier();

    boolean isMarkedNullable();
}

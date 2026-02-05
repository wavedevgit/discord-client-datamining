package kotlin.reflect.jvm.internal.impl.descriptors;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.types.model.RigidTypeMarker;
import kotlin.reflect.jvm.internal.impl.types.model.SimpleTypeMarker;
import or.p;
import or.v;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nValueClassRepresentation.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ValueClassRepresentation.kt\norg/jetbrains/kotlin/descriptors/ValueClassRepresentation\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,51:1\n1563#2:52\n1634#2,3:53\n*S KotlinDebug\n*F\n+ 1 ValueClassRepresentation.kt\norg/jetbrains/kotlin/descriptors/ValueClassRepresentation\n*L\n23#1:52\n23#1:53,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class ValueClassRepresentation<Type extends RigidTypeMarker> {
    public /* synthetic */ ValueClassRepresentation(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    public abstract boolean containsPropertyWithName(@NotNull Name name);

    @NotNull
    public final <Other extends SimpleTypeMarker> ValueClassRepresentation<Other> mapUnderlyingType(@NotNull Function1<? super Type, ? extends Other> transform) {
        Intrinsics.checkNotNullParameter(transform, "transform");
        if (this instanceof InlineClassRepresentation) {
            InlineClassRepresentation inlineClassRepresentation = (InlineClassRepresentation) this;
            return new InlineClassRepresentation(inlineClassRepresentation.getUnderlyingPropertyName(), (RigidTypeMarker) transform.invoke(inlineClassRepresentation.getUnderlyingType()));
        } else if (this instanceof MultiFieldValueClassRepresentation) {
            List<Pair<Name, Type>> underlyingPropertyNamesToTypes = ((MultiFieldValueClassRepresentation) this).getUnderlyingPropertyNamesToTypes();
            ArrayList arrayList = new ArrayList(CollectionsKt.w(underlyingPropertyNamesToTypes, 10));
            Iterator<T> it = underlyingPropertyNamesToTypes.iterator();
            while (it.hasNext()) {
                Pair pair = (Pair) it.next();
                arrayList.add(v.a((Name) pair.a(), transform.invoke((RigidTypeMarker) pair.b())));
            }
            return new MultiFieldValueClassRepresentation(arrayList);
        } else {
            throw new p();
        }
    }

    private ValueClassRepresentation() {
    }
}

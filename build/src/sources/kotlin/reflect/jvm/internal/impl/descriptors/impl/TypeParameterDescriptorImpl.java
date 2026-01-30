package kotlin.reflect.jvm.internal.impl.descriptors.impl;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.devsupport.StackTraceHelper;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.SourceElement;
import kotlin.reflect.jvm.internal.impl.descriptors.SupertypeLoopChecker;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.resolve.DescriptorUtils;
import kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil.DescriptorUtilsKt;
import kotlin.reflect.jvm.internal.impl.storage.StorageManager;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.KotlinTypeKt;
import kotlin.reflect.jvm.internal.impl.types.Variance;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class TypeParameterDescriptorImpl extends AbstractTypeParameterDescriptor {

    /* renamed from: v  reason: collision with root package name */
    private final Function1 f33863v;

    /* renamed from: w  reason: collision with root package name */
    private final List f33864w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f33865x;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    private TypeParameterDescriptorImpl(DeclarationDescriptor declarationDescriptor, Annotations annotations, boolean z10, Variance variance, Name name, int i10, SourceElement sourceElement, Function1 function1, SupertypeLoopChecker supertypeLoopChecker, StorageManager storageManager) {
        super(storageManager, declarationDescriptor, annotations, name, variance, z10, i10, sourceElement, supertypeLoopChecker);
        if (declarationDescriptor == null) {
            a(19);
        }
        if (annotations == null) {
            a(20);
        }
        if (variance == null) {
            a(21);
        }
        if (name == null) {
            a(22);
        }
        if (sourceElement == null) {
            a(23);
        }
        if (supertypeLoopChecker == null) {
            a(24);
        }
        if (storageManager == null) {
            a(25);
        }
        this.f33864w = new ArrayList(1);
        this.f33865x = false;
        this.f33863v = function1;
    }

    private static /* synthetic */ void a(int i10) {
        String str = (i10 == 5 || i10 == 28) ? "@NotNull method %s.%s must not return null" : "Argument for @NotNull parameter '%s' of %s.%s must not be null";
        Object[] objArr = new Object[(i10 == 5 || i10 == 28) ? 2 : 3];
        switch (i10) {
            case 1:
            case 7:
            case 13:
            case 20:
                objArr[0] = "annotations";
                break;
            case 2:
            case 8:
            case 14:
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                objArr[0] = "variance";
                break;
            case 3:
            case 9:
            case 15:
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                objArr[0] = StackTraceHelper.NAME_KEY;
                break;
            case 4:
            case 11:
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                objArr[0] = "storageManager";
                break;
            case 5:
            case 28:
                objArr[0] = "kotlin/reflect/jvm/internal/impl/descriptors/impl/TypeParameterDescriptorImpl";
                break;
            case 6:
            case 12:
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
            default:
                objArr[0] = "containingDeclaration";
                break;
            case 10:
            case 16:
            case 23:
                objArr[0] = "source";
                break;
            case 17:
                objArr[0] = "supertypeLoopsResolver";
                break;
            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                objArr[0] = "supertypeLoopsChecker";
                break;
            case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                objArr[0] = "bound";
                break;
            case 27:
                objArr[0] = "type";
                break;
        }
        if (i10 == 5) {
            objArr[1] = "createWithDefaultBound";
        } else if (i10 != 28) {
            objArr[1] = "kotlin/reflect/jvm/internal/impl/descriptors/impl/TypeParameterDescriptorImpl";
        } else {
            objArr[1] = "resolveUpperBounds";
        }
        switch (i10) {
            case 5:
            case 28:
                break;
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                objArr[2] = "createForFurtherModification";
                break;
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
            case 20:
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
            case 23:
            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                objArr[2] = "<init>";
                break;
            case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                objArr[2] = "addUpperBound";
                break;
            case 27:
                objArr[2] = "reportSupertypeLoopError";
                break;
            default:
                objArr[2] = "createWithDefaultBound";
                break;
        }
        String format = String.format(str, objArr);
        if (i10 != 5 && i10 != 28) {
            throw new IllegalArgumentException(format);
        }
        throw new IllegalStateException(format);
    }

    public static TypeParameterDescriptorImpl createForFurtherModification(@NotNull DeclarationDescriptor declarationDescriptor, @NotNull Annotations annotations, boolean z10, @NotNull Variance variance, @NotNull Name name, int i10, @NotNull SourceElement sourceElement, @NotNull StorageManager storageManager) {
        if (declarationDescriptor == null) {
            a(6);
        }
        if (annotations == null) {
            a(7);
        }
        if (variance == null) {
            a(8);
        }
        if (name == null) {
            a(9);
        }
        if (sourceElement == null) {
            a(10);
        }
        if (storageManager == null) {
            a(11);
        }
        return createForFurtherModification(declarationDescriptor, annotations, z10, variance, name, i10, sourceElement, null, SupertypeLoopChecker.EMPTY.INSTANCE, storageManager);
    }

    @NotNull
    public static TypeParameterDescriptor createWithDefaultBound(@NotNull DeclarationDescriptor declarationDescriptor, @NotNull Annotations annotations, boolean z10, @NotNull Variance variance, @NotNull Name name, int i10, @NotNull StorageManager storageManager) {
        if (declarationDescriptor == null) {
            a(0);
        }
        if (annotations == null) {
            a(1);
        }
        if (variance == null) {
            a(2);
        }
        if (name == null) {
            a(3);
        }
        if (storageManager == null) {
            a(4);
        }
        TypeParameterDescriptorImpl createForFurtherModification = createForFurtherModification(declarationDescriptor, annotations, z10, variance, name, i10, SourceElement.NO_SOURCE, storageManager);
        createForFurtherModification.addUpperBound(DescriptorUtilsKt.getBuiltIns(declarationDescriptor).getDefaultBound());
        createForFurtherModification.setInitialized();
        return createForFurtherModification;
    }

    private void d() {
        if (this.f33865x) {
            return;
        }
        throw new IllegalStateException("Type parameter descriptor is not initialized: " + g());
    }

    private void e() {
        if (!this.f33865x) {
            return;
        }
        throw new IllegalStateException("Type parameter descriptor is already initialized: " + g());
    }

    private void f(KotlinType kotlinType) {
        if (KotlinTypeKt.isError(kotlinType)) {
            return;
        }
        this.f33864w.add(kotlinType);
    }

    private String g() {
        return getName() + " declared in " + DescriptorUtils.getFqName(getContainingDeclaration());
    }

    public void addUpperBound(@NotNull KotlinType kotlinType) {
        if (kotlinType == null) {
            a(26);
        }
        e();
        f(kotlinType);
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.AbstractTypeParameterDescriptor
    protected List c() {
        d();
        List list = this.f33864w;
        if (list == null) {
            a(28);
        }
        return list;
    }

    public boolean isInitialized() {
        return this.f33865x;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.AbstractTypeParameterDescriptor
    protected void reportSupertypeLoopError(KotlinType kotlinType) {
        if (kotlinType == null) {
            a(27);
        }
        Function1 function1 = this.f33863v;
        if (function1 == null) {
            return;
        }
        function1.invoke(kotlinType);
    }

    public void setInitialized() {
        e();
        this.f33865x = true;
    }

    public static TypeParameterDescriptorImpl createForFurtherModification(@NotNull DeclarationDescriptor declarationDescriptor, @NotNull Annotations annotations, boolean z10, @NotNull Variance variance, @NotNull Name name, int i10, @NotNull SourceElement sourceElement, Function1<KotlinType, Void> function1, @NotNull SupertypeLoopChecker supertypeLoopChecker, @NotNull StorageManager storageManager) {
        if (declarationDescriptor == null) {
            a(12);
        }
        if (annotations == null) {
            a(13);
        }
        if (variance == null) {
            a(14);
        }
        if (name == null) {
            a(15);
        }
        if (sourceElement == null) {
            a(16);
        }
        if (supertypeLoopChecker == null) {
            a(17);
        }
        if (storageManager == null) {
            a(18);
        }
        return new TypeParameterDescriptorImpl(declarationDescriptor, annotations, z10, variance, name, i10, sourceElement, function1, supertypeLoopChecker, storageManager);
    }
}

package fs;

import java.util.Collections;
import java.util.List;
import kotlin.jvm.internal.CallableReference;
import kotlin.jvm.internal.ClassBasedDeclarationContainer;
import kotlin.jvm.internal.FunctionBase;
import kotlin.jvm.internal.FunctionReference;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.MutablePropertyReference0;
import kotlin.jvm.internal.MutablePropertyReference1;
import kotlin.jvm.internal.MutablePropertyReference2;
import kotlin.jvm.internal.PropertyReference0;
import kotlin.jvm.internal.PropertyReference1;
import kotlin.jvm.internal.PropertyReference2;
import kotlin.jvm.internal.ReflectionFactory;
import kotlin.reflect.KCallable;
import kotlin.reflect.KClass;
import kotlin.reflect.KDeclarationContainer;
import kotlin.reflect.KFunction;
import kotlin.reflect.KProperty1;
import kotlin.reflect.KType;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class a3 extends ReflectionFactory {
    private static c1 a(CallableReference callableReference) {
        KDeclarationContainer owner = callableReference.getOwner();
        if (owner instanceof c1) {
            return (c1) owner;
        }
        return k.f24557o;
    }

    @Override // kotlin.jvm.internal.ReflectionFactory
    public KClass createKotlinClass(Class cls) {
        return new w0(cls);
    }

    @Override // kotlin.jvm.internal.ReflectionFactory
    public KFunction function(FunctionReference functionReference) {
        return new h1(a(functionReference), functionReference.getName(), functionReference.getSignature(), functionReference.getBoundReceiver());
    }

    @Override // kotlin.jvm.internal.ReflectionFactory
    public KClass getOrCreateKotlinClass(Class cls) {
        return h.m(cls);
    }

    @Override // kotlin.jvm.internal.ReflectionFactory
    public KDeclarationContainer getOrCreateKotlinPackage(Class cls, String str) {
        return h.n(cls);
    }

    @Override // kotlin.jvm.internal.ReflectionFactory
    public KType mutableCollectionType(KType kType) {
        return h3.a(kType);
    }

    @Override // kotlin.jvm.internal.ReflectionFactory
    public kotlin.reflect.f mutableProperty0(MutablePropertyReference0 mutablePropertyReference0) {
        return new j1(a(mutablePropertyReference0), mutablePropertyReference0.getName(), mutablePropertyReference0.getSignature(), mutablePropertyReference0.getBoundReceiver());
    }

    @Override // kotlin.jvm.internal.ReflectionFactory
    public kotlin.reflect.g mutableProperty1(MutablePropertyReference1 mutablePropertyReference1) {
        return new l1(a(mutablePropertyReference1), mutablePropertyReference1.getName(), mutablePropertyReference1.getSignature(), mutablePropertyReference1.getBoundReceiver());
    }

    @Override // kotlin.jvm.internal.ReflectionFactory
    public kotlin.reflect.h mutableProperty2(MutablePropertyReference2 mutablePropertyReference2) {
        return new n1(a(mutablePropertyReference2), mutablePropertyReference2.getName(), mutablePropertyReference2.getSignature());
    }

    @Override // kotlin.jvm.internal.ReflectionFactory
    public KType nothingType(KType kType) {
        return h3.b(kType);
    }

    @Override // kotlin.jvm.internal.ReflectionFactory
    public KType platformType(KType kType, KType kType2) {
        return h3.c(kType, kType2);
    }

    @Override // kotlin.jvm.internal.ReflectionFactory
    public kotlin.reflect.j property0(PropertyReference0 propertyReference0) {
        return new a2(a(propertyReference0), propertyReference0.getName(), propertyReference0.getSignature(), propertyReference0.getBoundReceiver());
    }

    @Override // kotlin.jvm.internal.ReflectionFactory
    public KProperty1 property1(PropertyReference1 propertyReference1) {
        return new d2(a(propertyReference1), propertyReference1.getName(), propertyReference1.getSignature(), propertyReference1.getBoundReceiver());
    }

    @Override // kotlin.jvm.internal.ReflectionFactory
    public kotlin.reflect.k property2(PropertyReference2 propertyReference2) {
        return new g2(a(propertyReference2), propertyReference2.getName(), propertyReference2.getSignature());
    }

    @Override // kotlin.jvm.internal.ReflectionFactory
    public String renderLambdaToString(Lambda lambda) {
        return renderLambdaToString((FunctionBase) lambda);
    }

    @Override // kotlin.jvm.internal.ReflectionFactory
    public KType typeOf(kotlin.reflect.d dVar, List list, boolean z10) {
        if (dVar instanceof ClassBasedDeclarationContainer) {
            return h.k(((ClassBasedDeclarationContainer) dVar).getJClass(), list, z10);
        }
        return ds.d.b(dVar, list, z10, Collections.EMPTY_LIST);
    }

    @Override // kotlin.jvm.internal.ReflectionFactory
    public kotlin.reflect.l typeParameter(Object obj, String str, kotlin.reflect.m mVar, boolean z10) {
        List<kotlin.reflect.l> typeParameters;
        if (obj instanceof KClass) {
            typeParameters = ((KClass) obj).getTypeParameters();
        } else if (obj instanceof KCallable) {
            typeParameters = ((KCallable) obj).getTypeParameters();
        } else {
            throw new IllegalArgumentException("Type parameter container must be a class or a callable: " + obj);
        }
        for (kotlin.reflect.l lVar : typeParameters) {
            if (lVar.getName().equals(str)) {
                return lVar;
            }
        }
        throw new IllegalArgumentException("Type parameter " + str + " is not found in container: " + obj);
    }

    @Override // kotlin.jvm.internal.ReflectionFactory
    public KClass createKotlinClass(Class cls, String str) {
        return new w0(cls);
    }

    @Override // kotlin.jvm.internal.ReflectionFactory
    public KClass getOrCreateKotlinClass(Class cls, String str) {
        return h.m(cls);
    }

    @Override // kotlin.jvm.internal.ReflectionFactory
    public String renderLambdaToString(FunctionBase functionBase) {
        h1 c10;
        KFunction a10 = es.d.a(functionBase);
        if (a10 != null && (c10 = j3.c(a10)) != null) {
            return d3.f24499a.h(c10.D());
        }
        return super.renderLambdaToString(functionBase);
    }

    @Override // kotlin.jvm.internal.ReflectionFactory
    public void setUpperBounds(kotlin.reflect.l lVar, List list) {
    }
}
